import {
  web3Render,
  screen,
  MatcherFunction,
  waitFor,
} from "utils/testing/testHelpers";
import { FarmCard } from "components";
import preloadAll from "jest-next-dynamic";
import { STAKED_TOKEN, REWARD_TOKEN } from "./data";

const TEST_ID = "farmSelect";

describe("<FarmCard />", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  it("renders the logo of each token", async () => {
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
    await waitFor(() => {
      const stakedLogo = screen.getByAltText(`${STAKED_TOKEN.name} icon`);
      expect(stakedLogo).toBeInTheDocument();
    });
    await waitFor(() => {
      const rewardLogo = screen.getByAltText(`${REWARD_TOKEN.name} icon`);
      expect(rewardLogo).toBeInTheDocument();
    });
  });
  it("has meta data saying what to stake and what you get in reward", () => {
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
    );
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
    const { baseElement } = web3Render(
      <FarmCard
        data-testid={TEST_ID}
        stakedToken={STAKED_TOKEN}
        rewardToken={REWARD_TOKEN}
      />
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
