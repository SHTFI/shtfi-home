import { useEffect, useState } from "react";
import useFarmContract from "./useFarmContract";
import { round } from "utils";
import { formatEther } from "@ethersproject/units";
import { FARM_INFO } from "config/constants";
import { FarmInfo } from "types";

const useFarmInfo = (
  farmAddress: string,
  stakedAddress: string
): { farmInfo: FarmInfo } => {
  // Handle state and set defaults in farm info
  const [farmInfo, setFarmInfo] = useState<FarmInfo>(FARM_INFO);
  const [farmId, setFarmId] = useState<string | number | null>(null);
  // Get our farm contract methods
  const { farmContract, setActiveFarmContract } = useFarmContract();
  // Get the farm contract
  useEffect(() => {
    // Ensure we aren't getting the same contract multiple times
    if (!farmContract || farmContract.address !== farmAddress) {
      setActiveFarmContract(farmAddress);
    }
  }, [farmAddress, farmContract, setActiveFarmContract]);
  // Set the id of the current pair so we can get the farm info
  useEffect(() => {
    let mounted = true;
    // Stop excessive renders
    if (stakedAddress && farmContract?.functions?.farmId && !farmId) {
      // call method
      farmContract.functions
        .farmId(stakedAddress)
        .then((data: string) => {
          // Make sure it is a string in case it is 0
          const id = data.toString();
          if (mounted) {
            // Set the ID
            setFarmId(id);
          }
        })
        .catch((e) => console.warn(e));
    }
    return () => {
      mounted = false;
    };
  }, [stakedAddress, farmContract, farmId]);
  // Set the rest of the farm info object
  useEffect(() => {
    let mounted = true;
    // Check if we should get updated info
    if (
      !!farmId &&
      !!farmContract &&
      !!farmContract?.functions?.farmInfo &&
      farmContract?.address === farmAddress &&
      farmInfo.stakedAddress !== stakedAddress
    ) {
      // Call method
      farmContract.functions
        .farmInfo(farmId)
        .then((data: string) => {
          // Destructure returned string into an array of values
          const [
            sAddress,
            sBalance,
            allocPoint,
            startBlock,
            rewardAlloc,
            rewardPerBlock,
            lastRewardBlock,
          ] = data.toString().split(",");
          // Parse the ether numbers
          const stakedBal = formatEther(sBalance);
          const rewardBlock = formatEther(rewardPerBlock);
          const rewardAllocation = formatEther(rewardAlloc);
          // Get the ratio of reward to stake
          const tRatio = parseFloat(rewardBlock) / parseFloat(stakedBal);
          // Check were still mounted
          if (mounted) {
            // Set the farm info object and round eth numbers to 5 dp
            setFarmInfo({
              address: farmAddress,
              stakedAddress: sAddress,
              rewardPerStake: round(tRatio, 5),
              stakedBalance: round(parseFloat(stakedBal), 5),
              rewardPerBlock: round(parseFloat(rewardBlock), 5),
              allocPoint: parseInt(allocPoint),
              rewardAlloc: round(parseFloat(rewardAllocation), 5),
              startBlock: parseInt(startBlock),
              lastRewardBlock: parseInt(lastRewardBlock),
              id: farmId,
            });
          }
        })
        .catch((e) => console.warn(e));
    }
    return () => {
      mounted = false;
    };
  }, [
    farmInfo.stakedAddress,
    stakedAddress,
    farmContract,
    farmId,
    farmAddress,
  ]);

  return { farmInfo };
};

export default useFarmInfo;
