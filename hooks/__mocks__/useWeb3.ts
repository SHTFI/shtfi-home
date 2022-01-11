import { Web3Provider } from "@ethersproject/providers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { EXTERNAL_PROVIDER, WALLET_ADDRESS } from "./web3";

/**
 *
 * Mock the useWeb3 component so that it can always be used in testing
 * This will always return the external provider
 * */

const useWeb3 = (): Web3ReactContextInterface<Web3Provider> => {
  return {
    active: true,
    activate: (
      a: AbstractConnector,
      e?: (err: Error) => void,
      throwErrors?: boolean
    ): Promise<void> => new Promise(() => {}),
    setError: () => {},
    deactivate: () => {},
    library: new Web3Provider(EXTERNAL_PROVIDER),
    account: WALLET_ADDRESS,
  };
};

export const useWeb3Active = {
  active: true,
  activate: (
    a: AbstractConnector,
    e?: (err: Error) => void,
    throwErrors?: boolean
  ): Promise<void> => new Promise(() => {}),
  setError: () => {},
  deactivate: () => {},
  library: new Web3Provider(EXTERNAL_PROVIDER),
  account: WALLET_ADDRESS,
};

export const useWeb3Error = {
  active: false,
  activate: (
    a: AbstractConnector,
    e?: (err: Error) => void,
    throwErrors?: boolean
  ): Promise<void> => new Promise(() => {}),
  setError: () => {},
  deactivate: () => {},
  library: new Web3Provider(EXTERNAL_PROVIDER),
  account: WALLET_ADDRESS,
  error: true,
};

export const useWeb3InactiveNoError = {
  active: false,
  activate: (
    a: AbstractConnector,
    e?: (err: Error) => void,
    throwErrors?: boolean
  ): Promise<void> => new Promise(() => {}),
  setError: () => {},
  deactivate: () => {},
  library: new Web3Provider(EXTERNAL_PROVIDER),
  account: WALLET_ADDRESS,
  error: false,
};

export default useWeb3;
