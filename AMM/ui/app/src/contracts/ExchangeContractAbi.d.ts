/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.31.0
  Forc version: 0.32.2
  Fuel-Core version: 0.17.1
*/

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from 'fuels';

import type { Option, Enum } from "./common";

export type InitErrorInput = Enum<{ AssetPairAlreadySet: [], AssetPairNotSet: [], IdenticalAssets: [] }>;
export type InitErrorOutput = InitErrorInput;
export type InputErrorInput = Enum<{ CannotAddLessThanMinimumLiquidity: BigNumberish, DeadlinePassed: BigNumberish, ExpectedNonZeroAmount: ContractIdInput, ExpectedNonZeroParameter: ContractIdInput, InvalidAsset: [] }>;
export type InputErrorOutput = Enum<{ CannotAddLessThanMinimumLiquidity: BN, DeadlinePassed: BN, ExpectedNonZeroAmount: ContractIdOutput, ExpectedNonZeroParameter: ContractIdOutput, InvalidAsset: [] }>;
export type TransactionErrorInput = Enum<{ DesiredAmountTooHigh: BigNumberish, DesiredAmountTooLow: BigNumberish, ExpectedNonZeroDeposit: ContractIdInput, InsufficientReserve: ContractIdInput, NoLiquidityToRemove: [] }>;
export type TransactionErrorOutput = Enum<{ DesiredAmountTooHigh: BN, DesiredAmountTooLow: BN, ExpectedNonZeroDeposit: ContractIdOutput, InsufficientReserve: ContractIdOutput, NoLiquidityToRemove: [] }>;

export type AddLiquidityEventInput = { added_assets: AssetPairInput, liquidity: AssetInput };
export type AddLiquidityEventOutput = { added_assets: AssetPairOutput, liquidity: AssetOutput };
export type AssetInput = { id: ContractIdInput, amount: BigNumberish };
export type AssetOutput = { id: ContractIdOutput, amount: BN };
export type AssetPairInput = { a: AssetInput, b: AssetInput };
export type AssetPairOutput = { a: AssetOutput, b: AssetOutput };
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type DefineAssetPairEventInput = { asset_a_id: ContractIdInput, asset_b_id: ContractIdInput };
export type DefineAssetPairEventOutput = { asset_a_id: ContractIdOutput, asset_b_id: ContractIdOutput };
export type DepositEventInput = { deposited_asset: AssetInput, new_balance: BigNumberish };
export type DepositEventOutput = { deposited_asset: AssetOutput, new_balance: BN };
export type PoolInfoInput = { reserves: AssetPairInput, liquidity: BigNumberish };
export type PoolInfoOutput = { reserves: AssetPairOutput, liquidity: BN };
export type PreviewAddLiquidityInfoInput = { other_asset_to_add: AssetInput, liquidity_asset_to_receive: AssetInput };
export type PreviewAddLiquidityInfoOutput = { other_asset_to_add: AssetOutput, liquidity_asset_to_receive: AssetOutput };
export type PreviewSwapInfoInput = { other_asset: AssetInput, sufficient_reserve: boolean };
export type PreviewSwapInfoOutput = { other_asset: AssetOutput, sufficient_reserve: boolean };
export type RemoveLiquidityEventInput = { removed_reserve: AssetPairInput, burned_liquidity: AssetInput };
export type RemoveLiquidityEventOutput = { removed_reserve: AssetPairOutput, burned_liquidity: AssetOutput };
export type RemoveLiquidityInfoInput = { removed_amounts: AssetPairInput, burned_liquidity: AssetInput };
export type RemoveLiquidityInfoOutput = { removed_amounts: AssetPairOutput, burned_liquidity: AssetOutput };
export type SwapEventInput = { input: AssetInput, output: AssetInput };
export type SwapEventOutput = { input: AssetOutput, output: AssetOutput };
export type WithdrawEventInput = { withdrawn_asset: AssetInput, remaining_balance: BigNumberish };
export type WithdrawEventOutput = { withdrawn_asset: AssetOutput, remaining_balance: BN };

interface ExchangeContractAbiInterface extends Interface {
  functions: {
    add_liquidity: FunctionFragment;
    balance: FunctionFragment;
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    pool_info: FunctionFragment;
    preview_add_liquidity: FunctionFragment;
    preview_swap_exact_input: FunctionFragment;
    preview_swap_exact_output: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_exact_input: FunctionFragment;
    swap_exact_output: FunctionFragment;
    withdraw: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'add_liquidity', values: [BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'balance', values: [ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'constructor', values: [ContractIdInput, ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'pool_info', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'preview_add_liquidity', values: [AssetInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'preview_swap_exact_input', values: [AssetInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'preview_swap_exact_output', values: [AssetInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'remove_liquidity', values: [BigNumberish, BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'swap_exact_input', values: [Option<BigNumberish>, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'swap_exact_output', values: [BigNumberish, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw', values: [AssetInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'constructor', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'pool_info', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'preview_add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'preview_swap_exact_input', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'preview_swap_exact_output', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_input', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_output', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
}

export class ExchangeContractAbi extends Contract {
  interface: ExchangeContractAbiInterface;
  functions: {
    add_liquidity: InvokeFunction<[desired_liquidity: BigNumberish, deadline: BigNumberish], BN>;
    balance: InvokeFunction<[asset_id: ContractIdInput], BN>;
    constructor: InvokeFunction<[asset_a: ContractIdInput, asset_b: ContractIdInput], void>;
    deposit: InvokeFunction<[], void>;
    pool_info: InvokeFunction<[], PoolInfoOutput>;
    preview_add_liquidity: InvokeFunction<[asset: AssetInput], PreviewAddLiquidityInfoOutput>;
    preview_swap_exact_input: InvokeFunction<[exact_input_asset: AssetInput], PreviewSwapInfoOutput>;
    preview_swap_exact_output: InvokeFunction<[exact_output_asset: AssetInput], PreviewSwapInfoOutput>;
    remove_liquidity: InvokeFunction<[min_asset_a: BigNumberish, min_asset_b: BigNumberish, deadline: BigNumberish], RemoveLiquidityInfoOutput>;
    swap_exact_input: InvokeFunction<[min_output: Option<BigNumberish>, deadline: BigNumberish], BN>;
    swap_exact_output: InvokeFunction<[output: BigNumberish, deadline: BigNumberish], BN>;
    withdraw: InvokeFunction<[asset: AssetInput], void>;
  };
}
