export const FARM_1 = {
  stakedAddress: "0xSTAKED",
  rewardPerStake: 0,
  stakedBalance: "100000000000000000000",
  rewardPerBlock: "6666666666666666",
  allocPoint: 50,
  rewardAlloc: "43096579999999999999999",
  startBlock: 8941560,
  lastRewardBlock: "15406047",
  id: 0,
};

export const FARMER_1 = {
  userAddress: "0xUSER",
  farmAddress: "0xFARM",
  farmId: 0,
  pendingRewards: "12000000000000000000",
  stakedBalance: "100000000000000000000",
  claimedRewards: "12000000000000000000",
  lastClaimBlock: 15445454,
  totalRewards: "24000000000000000000",
};

const useFarmContract = () => {
  return {
    farmContract: {
      address: FARMER_1.farmAddress,
      functions: {
        farmId: (add: string) =>
          new Promise((res) => {
            if (add === FARM_1.stakedAddress) {
              return res(FARM_1.id);
            }
          }),
        farmInfo: (id: number | string) =>
          new Promise((res) => {
            if (id == FARM_1.id) {
              return res(
                `${FARM_1.stakedAddress},${FARM_1.stakedBalance},${FARM_1.allocPoint},${FARM_1.startBlock},${FARM_1.rewardAlloc},${FARM_1.rewardPerBlock},${FARM_1.lastRewardBlock}`
              );
            }
          }),
        pendingShit: (id: number, address: string) => {
          return new Promise((res: any) => {
            if (id === FARMER_1.farmId && address === FARMER_1.userAddress) {
              return res(`${FARMER_1.pendingRewards}`);
            }
          });
        },
        userInfo: (id: number, add: string) => {
          return new Promise((res) => {
            if (id === FARMER_1.farmId && add === FARMER_1.userAddress) {
              return res(
                `${FARMER_1.stakedBalance},${FARMER_1.claimedRewards},${FARMER_1.lastClaimBlock}`
              );
            } else {
              return res(null);
            }
          });
        },
      },
    },
    setActiveFarmContract: jest.fn(),
  };
};

export default useFarmContract;
