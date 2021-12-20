import { render, screen, MatcherFunction } from "utils/testing/testHelpers";
import { FarmSelectSection } from "components";
import { FarmingPair, FarmToken } from "types";

const TEST_ID = "farmSelect";
const STAKED_TOKEN: FarmToken = {
  name: "Staked",
  ticker: "STK",
  icon: "/assets/images/tokens/shtfi-125-124.jpeg",
  url: "https://shtfi.io",
  contract: "0x123123",
  description: "description",
};
const REWARD_TOKEN: FarmToken = {
  name: "Reward",
  ticker: "RWD",
  icon: "/assets/images/tokens/squid-75-75.png",
  url: "https://reward.io",
  contract: "0x123123",
  description: "description",
};
const PAIRS: FarmingPair[] = [
  { stakedToken: STAKED_TOKEN, rewardToken: REWARD_TOKEN },
];
describe("<FarmSelectSection />", () => {
  it("renders", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const elem = screen.getByTestId(TEST_ID);
    expect(elem).toBeInTheDocument();
  });
  it("renders the logo of each token", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const stakedLogo = screen.getByAltText(`${STAKED_TOKEN.name} icon`);
    expect(stakedLogo).toBeInTheDocument();
    const rewardLogo = screen.getByAltText(`${REWARD_TOKEN.name} icon`);
    expect(rewardLogo).toBeInTheDocument();
  });
  it("has meta data saying what to stake and what you get in reward", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getStakedText: MatcherFunction = (content, element) => {
      const stakedText = "Stake:";
      const isStakeParent = content === stakedText && element?.tagName === "P";
      const childSpan = element?.querySelector("span");
      const spanIsStaked = childSpan?.textContent == STAKED_TOKEN.ticker;
      if (isStakeParent && spanIsStaked) {
        return true;
      } else {
        return false;
      }
    };
    const getRewardText: MatcherFunction = (content, element) => {
      const rewardText = "Get:";
      const isRewardParent = content === rewardText && element?.tagName === "P";
      const childSpan = element?.querySelector("span");
      const spanIsReward = childSpan?.textContent == REWARD_TOKEN.ticker;
      if (isRewardParent && spanIsReward) {
        return true;
      } else {
        return false;
      }
    };

    const stakedText = screen.getByText(getStakedText);
    expect(stakedText).toBeInTheDocument();
    const rewardText = screen.getByText(getRewardText);
    expect(rewardText).toBeInTheDocument();
  });
  it("says how much of the staked token is in the contract", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getRewardText: MatcherFunction = (content, element) => {
      const contentIsCorrect = content.includes(
        `Total ${STAKED_TOKEN.ticker}:`
      );
      const childSpan = element?.querySelector("span");
      const spanIsValue = /^[0-9,\.]+$/.test(childSpan?.textContent as string);
      return contentIsCorrect && spanIsValue;
    };
    const elem = screen.getByText(getRewardText);
    expect(elem).toBeInTheDocument();
  });
  it("says how much reward token is issued per block", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getBlockRewardText: MatcherFunction = (content, element) => {
      const contentIsCorrect = content.includes(
        `${REWARD_TOKEN.ticker} per block:`
      );
      const childSpan = element?.querySelector("span");
      const spanIsValue = /^[0-9,\.]+$/.test(childSpan?.textContent as string);
      return contentIsCorrect && spanIsValue;
    };
    const elem = screen.getByText(getBlockRewardText);
    expect(elem).toBeInTheDocument();
  });
  it("says reward per staked token", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getBlockRewardText: MatcherFunction = (content, element) => {
      const contentIsCorrect = content.includes(
        `${REWARD_TOKEN.ticker} per ${STAKED_TOKEN.ticker}:`
      );
      const childSpan = element?.querySelector("span");
      const spanIsValue = /^[0-9,\.]+$/.test(childSpan?.textContent as string);
      return contentIsCorrect && spanIsValue;
    };
    const elem = screen.getByText(getBlockRewardText);
    expect(elem).toBeInTheDocument();
  });
  it("shows user their stake", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getUserStakeText: MatcherFunction = (content, element) => {
      const contentIsCorrect = content === `Your Stake:`;
      const sibling = element?.nextElementSibling;
      const siblingIsSpan = sibling?.tagName === "SPAN";
      if (!!!siblingIsSpan) return false;
      const siblingIsValue = /^[0-9,\.]+ [A-Z]+\w?$/gi.test(
        sibling?.textContent as string
      );
      return contentIsCorrect && siblingIsValue;
    };
    const elem = screen.getByText(getUserStakeText);
    expect(elem).toBeInTheDocument();
  });
  it("shows user their rewards", () => {
    render(<FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />);
    const getUserRewardText: MatcherFunction = (content, element) => {
      const contentIsCorrect = content === `Your Rewards:`;
      const sibling = element?.nextElementSibling;
      const siblingIsSpan = sibling?.tagName === "SPAN";
      if (!!!siblingIsSpan) return false;
      const siblingIsValue = /^[0-9,\.]+ [A-Z]+\w?$/gi.test(
        sibling?.textContent as string
      );
      return contentIsCorrect && siblingIsValue;
    };
    const elem = screen.getByText(getUserRewardText);
    expect(elem).toBeInTheDocument();
  });
  it("has a stake, unstake and claim button", () => {
    const { baseElement } = render(
      <FarmSelectSection data-testid={TEST_ID} farms={PAIRS} />
    );
    const stakeButton = baseElement.querySelector(
      `#stake-${STAKED_TOKEN.ticker}-${REWARD_TOKEN.ticker}`
    );
    const unstakeButton = baseElement.querySelector(
      `#unstake-${STAKED_TOKEN.ticker}-${REWARD_TOKEN.ticker}`
    );
    const claimButton = baseElement.querySelector(
      `#claim-${STAKED_TOKEN.ticker}-${REWARD_TOKEN.ticker}`
    );
    expect(stakeButton).toBeInTheDocument();
    expect(unstakeButton).toBeInTheDocument();
    expect(claimButton).toBeInTheDocument();
  });
});
