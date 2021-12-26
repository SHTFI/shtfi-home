import { render, web3Render } from "./testHelpers";
import { Web3ReactManager } from "components";
import preloadAll from "jest-next-dynamic";

const TestHook: React.FC<{ callback: () => void }> = ({ callback }) => {
  callback();
  return null;
};

export const web3TestHook = (callback: () => void) => {
  preloadAll().then(() => {
    web3Render(
      <Web3ReactManager>
        <TestHook callback={callback} />
      </Web3ReactManager>
    );
  });
};
export const testHook = (callback: () => void) => {
  render(<TestHook callback={callback} />);
};
