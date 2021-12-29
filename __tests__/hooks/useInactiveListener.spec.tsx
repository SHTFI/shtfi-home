import { useInactiveListener } from "hooks";
import { EXTERNAL_PROVIDER } from "hooks/__mocks__/web3";
import { testHook, act } from "utils/testing";
// Use a simpler mock of the web 3 component as we dont need an actual library
jest.mock("hooks/useWeb3", () => {
  return () => ({
    error: false,
    active: false,
    activate: () => {},
  });
});

describe("useInactiveListener", () => {
  it("attaches functions to the correct ethereum methods", async () => {
    // Make some mock functions to check that they have been called
    const connectCB = jest.fn();
    const chainCB = jest.fn();
    const accountCB = jest.fn();
    // ADd an ethereum provider
    (window as any).ethereum = EXTERNAL_PROVIDER;
    // Add the mock event handler which we will use to verify that the inactive
    // listener has added handlers to the correct methods
    (window as any).ethereum.on = jest.fn((arg: string, cb: any) => {
      switch (arg) {
        case "connect":
          connectCB();
          break;
        case "chainChanged":
          chainCB();
          break;
        case "accountsChanged":
          accountCB();
          break;
        default:
          break;
      }
    });
    // Use our hook
    act(() => testHook(() => useInactiveListener(false)));
    // Check whether our callbacks have been fired
    expect(accountCB.mock.calls.length).toBe(1);
    expect(chainCB.mock.calls.length).toBe(1);
    expect(connectCB.mock.calls.length).toBe(1);
  });
});
