import { ethToNumber, round } from "utils";
import { useFarmContract } from "hooks";
import { useState, useEffect } from "react";
import { DEFAULT_FARMER } from "config";
import { FarmerInfo } from "types";

const useFarmerInfo = (
  userAddress: string | null | undefined,
  farmAddress: string | null | undefined,
  farmId: number | string | null | undefined
): { farmerInfo: FarmerInfo } => {
  const [farmerInfo, setFarmerInfo] = useState<FarmerInfo>(DEFAULT_FARMER);
  const [pendingRewards, setPendingRewards] = useState<number>(0);
  const [stakedBalance, setStakedBalance] = useState<number>(0);
  const [claimedRewards, setClaimedRewards] = useState<number>(0);
  const [lastClaimBlock, setLastClaimBlock] = useState<number>(0);

  // Get the farm contract context
  const { farmContract, setActiveFarmContract } = useFarmContract();

  // Use state to get the farm contract
  useEffect(() => {
    if (!farmAddress) return;
    // Ensure we are not trying to set the contract if it is already set
    if (farmContract?.address !== farmAddress || !!!farmContract) {
      setActiveFarmContract(farmAddress);
    }
  }, [farmContract, farmAddress, setActiveFarmContract]);
  // Use effect to get the pending shit balance
  useEffect(() => {
    let mounted = true;
    // Ensure we do not infinitely update
    if (
      !!farmAddress &&
      farmContract?.address === farmAddress &&
      !!userAddress
    ) {
      // Call the pending rewards function
      farmContract.functions
        .pendingShit(farmId, userAddress)
        .then((data: any) => {
          // First make sure our response is a string
          let pending = ethToNumber(data.toString());
          // Check we are still mounted
          if (mounted) {
            // Set the state
            setPendingRewards(round(pending, 5));
          }
        })
        .catch((e: any) => console.warn(e));
    }
    // Cleanup
    return () => {
      mounted = false;
    };
  }, [farmId, userAddress, farmAddress, farmContract]);
  // Get the rest of the user info
  useEffect(() => {
    // We know the component is currently mounted
    let mounted = true;
    // Check that the farm Contract is correct
    if (
      !!farmAddress &&
      farmContract?.address === farmAddress &&
      !!userAddress
    ) {
      // Call the function we want
      farmContract?.functions
        ?.userInfo(farmId, userAddress)
        .then((data: string) => {
          const typedData = data.toString();
          // Check for data
          if (!!typedData) {
            // Destructure the data and parse it into a normal number rounded to 5 dp
            // Skip index 2 as we know this is the block number so we don't need to format it
            let [stakedBalance, claimedRewards, lastClaimBlock] = typedData
              ?.split(",")
              ?.map((d: string, i: number) =>
                i < 2 ? round(ethToNumber(d.toString()), 5) : Number(d)
              );
            // Check we are still mounted to prevent any memory leak
            if (mounted) {
              // Set our state
              setStakedBalance(stakedBalance);
              setClaimedRewards(claimedRewards);
              setLastClaimBlock(lastClaimBlock);
            }
          }
        })
        .catch((e: any) => {
          console.warn(e);
        });
    }
    // Do some cleanup to ensure we do not try and update state after the component is unmounted
    return () => {
      mounted = false;
    };
  }, [
    userAddress,
    farmId,
    farmAddress,
    farmContract?.address,
    farmContract?.functions,
    farmContract?.functions.userInfo,
  ]);
  // Set the farmerInfo object in useEffect to ensure it always updates with new data
  useEffect(() => {
    setFarmerInfo({
      userAddress,
      farmAddress,
      farmId,
      pendingRewards,
      stakedBalance,
      claimedRewards,
      lastClaimBlock,
      totalRewards: claimedRewards + pendingRewards,
    });
  }, [
    userAddress,
    farmAddress,
    farmId,
    pendingRewards,
    stakedBalance,
    claimedRewards,
    lastClaimBlock,
  ]);

  return { farmerInfo };
};

export default useFarmerInfo;
