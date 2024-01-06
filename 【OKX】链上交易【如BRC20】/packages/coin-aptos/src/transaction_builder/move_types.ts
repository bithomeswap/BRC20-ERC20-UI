/***
 *   Copyright © Aptos Foundation
 *SPDX-License-Identifier: Apache-2.0
 *
 * https://raw.githubusercontent.com/aptos-labs/aptos-core/097ea73b4a78c0166f22a269f27e514dc895afb4/ecosystem/typescript/sdk/LICENSE
 *
 * */

/**
 * Entry function id is string representation of a entry function defined on-chain.
 *
 * Format: `{address}::{module name}::{function name}`
 *
 * Both `module name` and `function name` are case-sensitive.
 *
 */
export type EntryFunctionId = string;

/**
 * String representation of an on-chain Move type tag that is exposed in transaction payload.
 * Values:
 * - bool
 * - u8
 * - u64
 * - u128
 * - address
 * - signer
 * - vector: `vector<{non-reference MoveTypeId}>`
 * - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
 *
 * Vector type value examples:
 * - `vector<u8>`
 * - `vector<vector<u64>>`
 * - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
 *
 * Struct type value examples:
 * - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
 * - `0x1::account::Account`
 *
 * Note:
 * 1. Empty chars should be ignored when comparing 2 struct tag ids.
 * 2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
 *
 */
export type MoveType = string;

export type IdentifierWrapper = string;

export type MoveModuleId = string;

export enum MoveFunctionVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public',
  FRIEND = 'friend',
}

export type MoveFunctionGenericTypeParam = {
  constraints: Array<MoveAbility>;
};

export type MoveFunction = {
  name: IdentifierWrapper;
  visibility: MoveFunctionVisibility;
  /**
   * Whether the function can be called as an entry function directly in a transaction
   */
  is_entry: boolean;
  /**
   * Whether the function is a view function or not
   */
  is_view: boolean;
  /**
   * Generic type params associated with the Move function
   */
  generic_type_params: Array<MoveFunctionGenericTypeParam>;
  /**
   * Parameters associated with the move function
   */
  params: Array<MoveType>;
  /**
   * Return type of the function
   */
  return: Array<MoveType>;
};

export type MoveModule = {
  address: Address;
  name: IdentifierWrapper;
  /**
   * Friends of the module
   */
  friends: Array<MoveModuleId>;
  /**
   * Public functions of the module
   */
  exposed_functions: Array<MoveFunction>;
  /**
   * Structs of the module
   */
  structs: Array<MoveStruct>;
};

export type MoveStruct = {
  name: IdentifierWrapper;
  is_native: boolean;
  abilities: Array<MoveAbility>;
  generic_type_params: Array<MoveStructGenericTypeParam>;
  fields: Array<MoveStructField>;
};

export type MoveStructField = {
  name: IdentifierWrapper;
  type: MoveType;
};

export type MoveStructGenericTypeParam = {
  constraints: Array<MoveAbility>;
};

export type MoveAbility = string;

/**
 * Hex encoded 32 byte Aptos account address
 */
export type Address = string;

/**
 * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
 * two hex digits per byte.
 *
 * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
 *
 */
export type HexEncodedBytes = string;

export type MoveModuleBytecode = {
  bytecode: HexEncodedBytes;
  abi?: MoveModule;
};

export type MoveStructValue = {
};
export type U64 = string;
export type AccountData = {
  sequence_number: U64;
  authentication_key: HexEncodedBytes;
};
export type GasEstimation = {
  /**
   * The deprioritized estimate for the gas unit price
   */
  deprioritized_gas_estimate?: number;
  /**
   * The current estimate for the gas unit price
   */
  gas_estimate: number;
  /**
   * The prioritized estimate for the gas unit price
   */
  prioritized_gas_estimate?: number;
};