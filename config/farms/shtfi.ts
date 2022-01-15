import { core, additional } from "config/tokens";
import { FarmingPairData, FarmToken } from "types";

const SHTFI_FARMS: FarmingPairData[] = [
  {
    chain: 97,
    contract: { 56: "", 97: "0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf" },
    stakedToken: core.find((token) => token.ticker === "BTC") as FarmToken,
    rewardToken: core.find((token) => token.ticker === "SHTFI") as FarmToken,
  },
  {
    chain: 97,
    contract: { 56: "", 97: "0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf" },
    stakedToken: additional.find(
      (token) => token.ticker === "MOCK"
    ) as FarmToken,
    rewardToken: core.find((token) => token.ticker === "SHTFI") as FarmToken,
  },
];

export { SHTFI_FARMS };
