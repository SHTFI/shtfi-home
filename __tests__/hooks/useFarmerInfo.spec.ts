import { testHook, waitFor } from "utils/testing";
import { useFarmerInfo } from "hooks";
import { FARMER_1, FARM_1 } from "hooks/__mocks__/useFarmContract";

jest.mock("hooks/useFarmContract");

describe("useFarmerInfo", () => {
  it("should initialise to 0's by default", async () => {
    let farmerInfo: any;
    await waitFor(() => {
      testHook(() => ({ farmerInfo } = useFarmerInfo("0xUser1", "0xFarm1", 2)));
    });
    expect(farmerInfo?.userAddress).toBe("0xUser1");
    expect(farmerInfo?.farmAddress).toBe("0xFarm1");
    expect(farmerInfo?.stakedBalance).toBe(0);
    expect(farmerInfo?.pendingRewards).toBe(0);
    expect(farmerInfo?.farmId).toBe(2);
    expect(farmerInfo?.claimedRewards).toBe(0);
    expect(farmerInfo?.totalRewards).toBe(0);
    expect(farmerInfo?.lastClaimBlock).toBe(0);
  });
  it("should return information from the farm contract", async () => {
    let farmerInfo: any;
    await waitFor(() => {
      testHook(
        () =>
          ({ farmerInfo } = useFarmerInfo(
            FARMER_1.userAddress,
            FARMER_1.farmAddress,
            FARMER_1.farmId
          ))
      );
    });
    expect(farmerInfo?.userAddress).toBe(FARMER_1.userAddress);
    expect(farmerInfo?.stakedBalance).toBe(100);
    expect(farmerInfo?.pendingRewards).toBe(12);
    expect(farmerInfo?.claimedRewards).toBe(12);
    expect(farmerInfo?.totalRewards).toBe(24);
    expect(farmerInfo?.lastClaimBlock).toBe(15445454);
    expect(farmerInfo?.farmId).toBe(FARM_1.id);
  });
});
