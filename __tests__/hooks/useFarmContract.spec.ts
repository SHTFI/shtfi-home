import { testHook, cleanup, act } from "utils/testing";
import { useFarmContract } from "hooks";
import { Contract } from "@ethersproject/contracts";
import { SHTFI_FARMS } from "config";

jest.mock("hooks/useWeb3");

describe("useFarmContract", () => {
  afterEach(cleanup);
  it("exposes an undefined farm contract and a setter at first", async () => {
    let farmContract: any, setActiveFarmContract: any;

    testHook(
      () => ({ farmContract, setActiveFarmContract } = useFarmContract())
    );

    expect(typeof farmContract === "undefined").toBe(true);
    expect(typeof setActiveFarmContract === "function").toBe(true);
  });

  it("exposes an erc20 contract when an address is passed", async () => {
    let farmContract: any, setActiveFarmContract: any;
    // Wait for the web3 render

    testHook(
      () => ({ farmContract, setActiveFarmContract } = useFarmContract())
    );

    // Check the first test is still passing
    expect(typeof farmContract === "undefined").toBe(true);
    expect(typeof setActiveFarmContract === "function").toBe(true);
    // Set our web3 contract
    act(() => setActiveFarmContract(SHTFI_FARMS[0].contract[97]));
    // Contract should now be a contract
    expect(farmContract instanceof Contract).toBe(true);
  });
});
