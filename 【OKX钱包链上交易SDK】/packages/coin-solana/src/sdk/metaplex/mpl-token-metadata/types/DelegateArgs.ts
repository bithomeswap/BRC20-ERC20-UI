/**
 * The following methods are based on `mpl-token-metadata`, thanks for their work
 * https://github.com/metaplex-foundation/mpl-token-metadata/tree/main/programs/token-metadata/js/src/generated/types
 */

/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '../../../web3';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '../../beet-solana';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link DelegateArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link DelegateArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type DelegateArgsRecord = {
  CollectionV1: { authorizationData: beet.COption<AuthorizationData> };
  SaleV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  TransferV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  DataV1: { authorizationData: beet.COption<AuthorizationData> };
  UtilityV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  StakingV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  StandardV1: { amount: beet.bignum };
  LockedTransferV1: {
    amount: beet.bignum;
    lockedAddress: web3.PublicKey;
    authorizationData: beet.COption<AuthorizationData>;
  };
  ProgrammableConfigV1: { authorizationData: beet.COption<AuthorizationData> };
  AuthorityItemV1: { authorizationData: beet.COption<AuthorizationData> };
  DataItemV1: { authorizationData: beet.COption<AuthorizationData> };
  CollectionItemV1: { authorizationData: beet.COption<AuthorizationData> };
  ProgrammableConfigItemV1: { authorizationData: beet.COption<AuthorizationData> };
};

/**
 * Union type respresenting the DelegateArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isDelegateArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type DelegateArgs = beet.DataEnumKeyAsKind<DelegateArgsRecord>;

export const isDelegateArgsCollectionV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'CollectionV1' } => x.__kind === 'CollectionV1';
export const isDelegateArgsSaleV1 = (x: DelegateArgs): x is DelegateArgs & { __kind: 'SaleV1' } =>
  x.__kind === 'SaleV1';
export const isDelegateArgsTransferV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'TransferV1' } => x.__kind === 'TransferV1';
export const isDelegateArgsDataV1 = (x: DelegateArgs): x is DelegateArgs & { __kind: 'DataV1' } =>
  x.__kind === 'DataV1';
export const isDelegateArgsUtilityV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'UtilityV1' } => x.__kind === 'UtilityV1';
export const isDelegateArgsStakingV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'StakingV1' } => x.__kind === 'StakingV1';
export const isDelegateArgsStandardV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'StandardV1' } => x.__kind === 'StandardV1';
export const isDelegateArgsLockedTransferV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'LockedTransferV1' } => x.__kind === 'LockedTransferV1';
export const isDelegateArgsProgrammableConfigV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'ProgrammableConfigV1' } => x.__kind === 'ProgrammableConfigV1';
export const isDelegateArgsAuthorityItemV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'AuthorityItemV1' } => x.__kind === 'AuthorityItemV1';
export const isDelegateArgsDataItemV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'DataItemV1' } => x.__kind === 'DataItemV1';
export const isDelegateArgsCollectionItemV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'CollectionItemV1' } => x.__kind === 'CollectionItemV1';
export const isDelegateArgsProgrammableConfigItemV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'ProgrammableConfigItemV1' } =>
  x.__kind === 'ProgrammableConfigItemV1';

/**
 * @category userTypes
 * @category generated
 */
export const delegateArgsBeet = beet.dataEnum<DelegateArgsRecord>([
  [
    'CollectionV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['CollectionV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["CollectionV1"]',
    ),
  ],

  [
    'SaleV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['SaleV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["SaleV1"]',
    ),
  ],

  [
    'TransferV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['TransferV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["TransferV1"]',
    ),
  ],

  [
    'DataV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['DataV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["DataV1"]',
    ),
  ],

  [
    'UtilityV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['UtilityV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["UtilityV1"]',
    ),
  ],

  [
    'StakingV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['StakingV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["StakingV1"]',
    ),
  ],

  [
    'StandardV1',
    new beet.BeetArgsStruct<DelegateArgsRecord['StandardV1']>(
      [['amount', beet.u64]],
      'DelegateArgsRecord["StandardV1"]',
    ),
  ],

  [
    'LockedTransferV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['LockedTransferV1']>(
      [
        ['amount', beet.u64],
        ['lockedAddress', beetSolana.publicKey],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["LockedTransferV1"]',
    ),
  ],

  [
    'ProgrammableConfigV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['ProgrammableConfigV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["ProgrammableConfigV1"]',
    ),
  ],

  [
    'AuthorityItemV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['AuthorityItemV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["AuthorityItemV1"]',
    ),
  ],

  [
    'DataItemV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['DataItemV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["DataItemV1"]',
    ),
  ],

  [
    'CollectionItemV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['CollectionItemV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["CollectionItemV1"]',
    ),
  ],

  [
    'ProgrammableConfigItemV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['ProgrammableConfigItemV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["ProgrammableConfigItemV1"]',
    ),
  ],
]) as beet.FixableBeet<DelegateArgs, DelegateArgs>;
