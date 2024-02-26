/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type LeafInfo = {
  leaf: number[] /* size: 32 */;
  proof: number[] /* size: 32 */[];
};

/**
 * @category userTypes
 * @category generated
 */
export const leafInfoBeet = new beet.FixableBeetArgsStruct<LeafInfo>(
  [
    ['leaf', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['proof', beet.array(beet.uniformFixedSizeArray(beet.u8, 32))],
  ],
  'LeafInfo',
);
