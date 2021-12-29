import { testHook, cleanup, act } from "utils/testing";
import { useTokenContract } from "hooks";
import { Contract } from "@ethersproject/contracts";
import { SHTFI_FARMS } from "config";

jest.mock("hooks/useWeb3");

describe("useTokenContract", () => {
  afterEach(cleanup);
  it("exposes an undefined farm contract and a setter at first", async () => {
    let tokenContract: any, setActiveTokenContract: any;

    testHook(
      () => ({ tokenContract, setActiveTokenContract } = useTokenContract())
    );

    expect(typeof tokenContract === "undefined").toBe(true);
    expect(typeof setActiveTokenContract === "function").toBe(true);
  });

  it("exposes an erc20 contract when an address is passed", async () => {
    let tokenContract: any, setActiveTokenContract: any;
    // Wait for the web3 render

    testHook(
      () => ({ tokenContract, setActiveTokenContract } = useTokenContract())
    );

    // Check the first test is still passing
    expect(typeof tokenContract === "undefined").toBe(true);
    expect(typeof setActiveTokenContract === "function").toBe(true);
    // Set our web3 contract
    act(() => setActiveTokenContract(SHTFI_FARMS[0].contract[97]));
    // Contract should now be a contract
    expect(tokenContract instanceof Contract).toBe(true);
  });
});
