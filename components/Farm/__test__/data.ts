export const STAKED_TOKEN: FarmToken = {
  name: "Staked",
  ticker: "STK",
  icon: "/assets/images/tokens/shtfi-125-124.jpeg",
  url: "https://shtfi.io",
  contract: { 97: "", 56: "" },
  description: "description",
};
export const REWARD_TOKEN: FarmToken = {
  name: "Reward",
  ticker: "RWD",
  icon: "/assets/images/tokens/squid-75-75.png",
  url: "https://reward.io",
  contract: { 97: "", 56: "" },
  description: "description",
};
export const STAKED_TOKEN_1: FarmToken = {
  name: "Staked 2",
  ticker: "STK2",
  icon: "/assets/images/tokens/shtfi-125-124.jpeg",
  url: "https://shtfi.io",
  contract: { 97: "", 56: "" },
  description: "description",
};
export const PAIRS: FarmingPairData[] = [
  {
    chain: "BSC",
    contract: { 56: "", 97: "" },
    stakedToken: {
      ...STAKED_TOKEN,
    },
    rewardToken: {
      ...REWARD_TOKEN,
    },
  },
  {
    chain: "BSC",
    contract: { 56: "", 97: "" },
    stakedToken: {
      ...STAKED_TOKEN_1,
    },
    rewardToken: {
      ...REWARD_TOKEN,
    },
  },
];
