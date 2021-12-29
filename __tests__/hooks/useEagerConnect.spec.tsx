import { useEagerConnect } from "hooks";
import { testHook, cleanup, act, waitFor } from "utils/testing";

const mockActivate = jest.fn();
jest.mock("hooks/useWeb3", () => {
  return () => ({
    activate: new Promise((res) => {
      res(mockActivate());
    }),
    active: true,
  });
});

jest.mock("context/web3");

describe("useEagerConnect", () => {
  afterEach(() => {
    cleanup();
    mockActivate.mockReset();
  });
  it("correctly identifies when it has attempted to connect", async () => {
    let tried = false;
    await waitFor(() => {
      testHook(() => {
        act(() => {
          tried = useEagerConnect();
        });
      });
    });
    expect(tried).toBe(true);
  });

  it("calls activate when the injected provider is authorised", async () => {
    let tried = false;
    await waitFor(() => {
      testHook(() => {
        act(() => {
          tried = useEagerConnect();
        });
      });
    });
    expect(mockActivate).toHaveBeenCalled();
  });
});
