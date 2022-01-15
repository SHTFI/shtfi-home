import { DEFAULT_CHAIN_ID } from "config";
import { EXTERNAL_PROVIDER } from "hooks/__mocks__/web3";
import {
  isMetaMaskInstalled,
  isSupportedChain,
  connectToMetaMask,
} from "utils";

describe("isMetaMaskInstalled", () => {
  it("returns false when there is no ethereum instance on the window", () => {
    delete (window as any).ethereum;
    expect(isMetaMaskInstalled()).toBe(false);
  });
  it("returns false when the ethereum instance exists but isMetaMask is false", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.isMetaMask = false;
    expect(isMetaMaskInstalled()).toBe(false);
  });

  it("returns true when the ethereum instance exists and isMetaMask is true", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.isMetaMask = true;
    expect(isMetaMaskInstalled()).toBe(true);
  });
});

describe("isSupportedChain", () => {
  it("returns false if the current chain ID is not in SUPPORTED_CHAINS", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.chainId = 69;
    expect(isSupportedChain()).toBe(false);
  });

  it("returns true if the current chain ID is in SUPPORTED_CHAINS", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.chainId = DEFAULT_CHAIN_ID;
    expect(isSupportedChain()).toBe(true);
  });
});

describe("connectToMetaMask", () => {
  it("does nothing if window.ethereum is undefined", () => {
    delete (window as any).ethereum;
    const activate = jest
      .fn()
      .mockReturnValue(new Promise(() => "Activate web3"));
    connectToMetaMask(activate);
    expect(activate).not.toHaveBeenCalled();
  });
  it("does nothing if window.ethereum.isMetaMask is false", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.isMetaMask = false;
    const activate = jest
      .fn()
      .mockReturnValue(new Promise(() => "Activate web3"));
    connectToMetaMask(activate);
    expect(activate).not.toHaveBeenCalled();
  });
  it("calls our activate callback if window.ethereum.isMetaMask is defined and is true", () => {
    (window as any).ethereum = EXTERNAL_PROVIDER;
    (window as any).ethereum.isMetaMask = true;
    const activate = jest
      .fn()
      .mockReturnValue(new Promise(() => "Activate web3"));
    connectToMetaMask(activate);
    expect(activate).toHaveBeenCalledTimes(1);
  });
});
