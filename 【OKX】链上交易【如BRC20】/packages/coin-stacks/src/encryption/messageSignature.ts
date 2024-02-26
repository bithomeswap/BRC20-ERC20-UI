/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Blockstack Inc.
 * https://github.com/hirosystems/stacks.js/blob/main/LICENSE
 * */

import { base } from '@okxweb3/crypto-lib';
import { concatBytes, utf8ToBytes } from '..//common';
import { decode, encode, encodingLength } from './varuint';

// 'Stacks Signed Message:\n'.length === 23
// 'Stacks Signed Message:\n'.length.toString(16) === 17
const chainPrefix = '\x17Stacks Signed Message:\n';

export function hashMessage(message: string, prefix: string = chainPrefix): Uint8Array {
  return base.sha256(encodeMessage(message, prefix));
}

export function encodeMessage(
  message: string | Uint8Array,
  prefix: string = chainPrefix
): Uint8Array {
  const messageBytes = typeof message == 'string' ? utf8ToBytes(message) : message;
  const encodedLength = encode(messageBytes.length);
  return concatBytes(utf8ToBytes(prefix), encodedLength, messageBytes);
}

export function decodeMessage(
  encodedMessage: Uint8Array,
  prefix: string = chainPrefix
): Uint8Array {
  // Remove the chain prefix
  const prefixByteLength = utf8ToBytes(prefix).byteLength;
  const messageWithoutChainPrefix = encodedMessage.subarray(prefixByteLength);
  const decoded = decode(messageWithoutChainPrefix);
  const varIntLength = encodingLength(decoded);
  // Remove the varint prefix
  return messageWithoutChainPrefix.slice(varIntLength);
}
