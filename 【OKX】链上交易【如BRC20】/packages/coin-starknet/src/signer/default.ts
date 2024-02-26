/**
 * MIT License
 *
 * Copyright (c) 2021 Sean James Han
 * https://raw.githubusercontent.com/0xs34n/starknet.js/develop/LICENSE
 * */

import { Abi, Call, DeclareSignerDetails, InvocationsSignerDetails, Signature } from '../types';
import { DeployAccountSignerDetails } from '../types/signer';
import { starkCurve } from '../utils/ec';
import { buf2hex } from '../utils/encode';
import {
  calculateDeclareTransactionHash,
  calculateDeployAccountTransactionHash,
  calculateTransactionHash,
} from '../utils/hash';
import { toHex } from '../utils/num';
import { getExecuteCalldata } from '../utils/transaction';
import { TypedData, getMessageHash } from '../utils/typedData';
import { SignerInterface } from './interface';
import {CallData} from "../utils/calldata";

export class Signer implements SignerInterface {
  protected pk: Uint8Array | string;

  constructor(pk: Uint8Array | string = starkCurve.utils.randomPrivateKey()) {
    this.pk = pk instanceof Uint8Array ? buf2hex(pk) : toHex(pk);
  }

  public async getPubKey(): Promise<string> {
    return starkCurve.getStarkKey(this.pk);
  }

  public async signMessage(typedData: TypedData, accountAddress: string): Promise<Signature> {
    const msgHash = getMessageHash(typedData, accountAddress);
    return starkCurve.sign(msgHash, this.pk);
  }

  public async signTransaction(
    transactions: Call[],
    transactionsDetail: InvocationsSignerDetails,
    abis?: Abi[]
  ): Promise<any> {
    if (abis && abis.length !== transactions.length) {
      throw new Error('ABI must be provided for each transaction or no transaction');
    }
    // now use abi to display decoded data somewhere, but as this signer is headless, we can't do that

    const calldata = getExecuteCalldata(transactions, transactionsDetail.cairoVersion);

    const msgHash = calculateTransactionHash(
      transactionsDetail.walletAddress,
      transactionsDetail.version,
      calldata,
      transactionsDetail.maxFee,
      transactionsDetail.chainId,
      transactionsDetail.nonce
    );
    const sig = starkCurve.sign(msgHash, this.pk);

    return { signature:sig, hash: msgHash };
  }

  public async signDeployAccountTransaction({
    classHash,
    contractAddress,
    constructorCalldata,
    addressSalt,
    maxFee,
    version,
    chainId,
    nonce,
  }: DeployAccountSignerDetails) {
    const msgHash = calculateDeployAccountTransactionHash(
      contractAddress,
      classHash,
      CallData.compile(constructorCalldata),
      addressSalt,
      version,
      maxFee,
      chainId,
      nonce
    );
    const sig = starkCurve.sign(msgHash, this.pk);

    return { signature:sig, hash: msgHash };
  }

  public async signDeclareTransaction(
    // contractClass: ContractClass,  // Should be used once class hash is present in ContractClass
    {
      classHash,
      senderAddress,
      chainId,
      maxFee,
      version,
      nonce,
      compiledClassHash,
    }: DeclareSignerDetails
  ) {
    const msgHash = calculateDeclareTransactionHash(
      classHash,
      senderAddress,
      version,
      maxFee,
      chainId,
      nonce,
      compiledClassHash
    );

    return starkCurve.sign(msgHash, this.pk);
  }
}
