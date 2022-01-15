import { SUPPORTED_CHAIN_IDS } from "config";
import { injectedWeb3 } from "context";

export const isMetaMaskInstalled = (): boolean =>
  window.ethereum && window.ethereum.isMetaMask ? true : false;

export const isSupportedChain = (): boolean =>
  SUPPORTED_CHAIN_IDS.includes(Number(window?.ethereum?.chainId ?? 0));

export const changeNetwork = async (id: number) => {
  if (!!window?.ethereum?.request) {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${id.toString(16)}` }],
    });
  }
};

export const connectToMetaMask = (activate: any) => {
  if (window.ethereum && window.ethereum.isMetaMask) {
    activate(injectedWeb3, undefined, true).catch((e: unknown) =>
      console.warn(e)
    );
  }
};
