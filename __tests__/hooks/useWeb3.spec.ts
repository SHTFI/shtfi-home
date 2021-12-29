import { waitFor, testHook, cleanup } from "utils/testing";
import { useWeb3 } from "hooks";
import { Web3Provider } from "@ethersproject/providers";
import { EXTERNAL_PROVIDER, WALLET_ADDRESS } from "hooks/__mocks__/web3";

// Mock the injected response
jest.mock("@web3-react/core", () => {
  const original = jest.requireActual("@web3-react/core");
  return {
    ...original,
    useWeb3React(type?: string) {
      if (type === "Network") {
        return {
          activate: () => {},
          active: true,
          account: null,
          library: "Network",
        } as unknown as Web3Provider;
      }

      if (
        !!!type &&
        (global.window as any).ethereum &&
        (global.window as any).ethereum.isMetaMask
      ) {
        return {
          activate: () => {},
          active: true,
          account: (global.window as any).ethereum.selectedAddress,
          library: "Injected",
        } as unknown as Web3Provider;
      }

      return {
        activate: () => {},
        active: false,
        account: null,
        library: {},
      } as unknown as Web3Provider;
    },
  };
});

describe("useWeb3", () => {
  afterEach(cleanup);

  it("will return a network provider if no ethereum instance is provided by the client", async () => {
    let activate: any,
      active: boolean = false,
      account: string | null | undefined,
      library: Web3Provider | undefined;

    await waitFor(() => {
      testHook(() => ({ activate, active, account, library } = useWeb3()));
    });
    expect(active).toBe(true);
    expect(account).toBe(null);
    expect(typeof activate === "function").toBe(true);
    expect(library).toBe("Network");
  });

  it("will return an injected provider if an ethereum instance is provided by the client", async () => {
    (global.window as any).ethereum = EXTERNAL_PROVIDER;
    (global.window as any).ethereum.selectedAddress = WALLET_ADDRESS;
    let activate: any,
      active: boolean = false,
      account: string | null | undefined,
      library: Web3Provider | undefined;

    await waitFor(() => {
      testHook(() => ({ activate, active, account, library } = useWeb3()));
    });

    expect(active).toBe(true);
    expect(account).toBe(WALLET_ADDRESS);
    expect(typeof activate === "function").toBe(true);
    expect(library).toBe("Injected");
  });
});
