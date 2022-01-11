import { render, screen } from "utils/testing/testHelpers";
import useWeb3 from "hooks/useWeb3"; // Import original so we can count the calls
import useEagerConnect from "hooks/useEagerConnect"; // Import original so we can count the calls
import useInactiveListener from "hooks/useInactiveListener"; // Import original so we can count the calls
import { Web3ReactManager } from "components";
import {
  useWeb3Active,
  useWeb3Error,
  useWeb3InactiveNoError,
} from "hooks/__mocks__/useWeb3";

// Mock useWeb3
jest.mock("hooks/useWeb3", () => jest.fn());

// Mock the useEagerConnect hook
// Use mock implementation so we can ensure the return value and check if it has been called
jest.mock("hooks/useEagerConnect", () => jest.fn());

// Mock the useInactiveListener hook
jest.mock("hooks/useInactiveListener", () => jest.fn());

describe("<Web3ReactManager/>", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("tries to connect with useEagerConnect", () => {
    (useEagerConnect as jest.Mock).mockReturnValue(true);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3Active);
    render(<Web3ReactManager />);
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
  });

  it("returns null if useEagerConnect returns false", () => {
    (useEagerConnect as jest.Mock).mockReturnValue(false);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3Active);
    render(
      <Web3ReactManager>
        <h1 data-testid="child">HEY</h1>
      </Web3ReactManager>
    );
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
    expect(() => screen.getByTestId("child")).toThrow();
  });

  it("calls the inactive listener and passes the inverted return value from useEagerConnect", () => {
    (useEagerConnect as jest.Mock).mockReturnValue(false);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3Active);
    render(<Web3ReactManager></Web3ReactManager>);
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
    expect(useInactiveListener).toHaveBeenCalledWith(true);
  });

  it("returns null if there is an error and web3 is not active", () => {
    // Suppress the console.error
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    jest.spyOn(console, "info").mockImplementation(jest.fn());
    (useEagerConnect as jest.Mock).mockReturnValue(true);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3Error);
    render(
      <Web3ReactManager>
        <h1 data-testid="child">HEY</h1>
      </Web3ReactManager>
    );
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
    expect(() => screen.getByTestId("child")).toThrow();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledTimes(1);
  });

  it("returns null if web3 is not active", () => {
    (useEagerConnect as jest.Mock).mockReturnValue(true);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3InactiveNoError);
    render(
      <Web3ReactManager>
        <h1 data-testid="child">HEY</h1>
      </Web3ReactManager>
    );
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
    expect(() => screen.getByTestId("child")).toThrow();
  });

  it("returns child components if web3 is active and tried eager is true", () => {
    (useEagerConnect as jest.Mock).mockReturnValue(true);
    (useWeb3 as jest.Mock).mockReturnValue(useWeb3Active);
    render(
      <Web3ReactManager>
        <h1 data-testid="child">HEY</h1>
      </Web3ReactManager>
    );
    const child = screen.getByTestId("child");
    expect(useEagerConnect).toHaveBeenCalledTimes(1);
    expect(child).toBeInTheDocument();
  });
});
