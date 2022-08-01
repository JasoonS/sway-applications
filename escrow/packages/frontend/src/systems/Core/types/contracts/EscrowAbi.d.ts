/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from "fuels";

export type AddressInput = { value: string };

export type Address = { value: string };

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

interface EscrowAbiInterface extends Interface {
  submit: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  submitResult: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  dryRun: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  dryRunResult: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  simulate: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  simulateResult: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };
  prepareCall: {
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    get_balance: FunctionFragment;
    get_user_data: FunctionFragment;
    get_state: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "constructor",
    values: [AddressInput, AddressInput, ContractIdInput, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "deposit",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "approve",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "withdraw",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_balance",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_user_data",
    values: [AddressInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "get_state",
    values?: undefined
  ): Uint8Array;

  decodeFunctionData(
    functionFragment: "constructor",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "deposit",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "approve",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "withdraw",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_balance",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_user_data",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "get_state",
    data: BytesLike
  ): DecodedValue;
}

export class EscrowAbi extends Contract {
  interface: EscrowAbiInterface;
  submit: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  submitResult: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  dryRunResult: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  prepareCall: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;
  };
  simulate: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  simulateResult: {
    constructor(
      buyer: AddressInput,
      seller: AddressInput,
      asset: ContractIdInput,
      asset_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_user_data(
      user: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_state(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  constructor(
    buyer: AddressInput,
    seller: AddressInput,
    asset: ContractIdInput,
    asset_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;

  deposit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;

  approve(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;

  get_balance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  get_user_data(
    user: AddressInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  get_state(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;
}