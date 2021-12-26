import { web3Render, screen, waitFor } from "utils/testing/testHelpers";
import preloadAll from "jest-next-dynamic";
import { FarmSelectSection } from "components";
import { PAIRS } from "./data";
const TEST_ID = "farmSelect";

describe("<FarmSelectSection />", () => {
  // AS we are using dynamically imported components in the web3 instance we need to preload them
  beforeAll(async () => {
    await preloadAll();
  });
  it("renders", async () => {
    web3Render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    await waitFor(() => {
      const elem = screen.getByTestId(TEST_ID);
      expect(elem).toBeInTheDocument();
    });
  });
  it("renders a card for each pair", () => {
    const { baseElement } = web3Render(
      <FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />
    );
    PAIRS.forEach((p) => {
      const stakeButton = baseElement.querySelector(
        `#stake-${p.stakedToken.ticker}-${p.rewardToken.ticker}`
      );
      expect(stakeButton).toBeInTheDocument();
    });
  });
});
