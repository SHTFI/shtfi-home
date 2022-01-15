import { FarmerInfo, FarmInfo } from "types";

export const FARM_INFO: FarmInfo = {
  stakedAddress: null,
  address: null,
  rewardPerStake: 0,
  stakedBalance: 0,
  rewardPerBlock: 0,
  allocPoint: 0,
  rewardAlloc: 0,
  startBlock: 0,
  lastRewardBlock: 0,
  id: null,
};

export const DEFAULT_FARMER: FarmerInfo = {
  userAddress: null,
  farmId: null,
  farmAddress: null,
  stakedBalance: 0,
  pendingRewards: 0,
  claimedRewards: 0,
  totalRewards: 0,
  lastClaimBlock: 0,
};

export const DEFAULT_CHAIN_ID: number = 97;

export const SUPPORTED_CHAIN_IDS: number[] = [97];
