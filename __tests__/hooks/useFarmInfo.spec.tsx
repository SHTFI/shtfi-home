import { useFarmInfo } from "hooks";
import { FARMER_1, FARM_1 } from "hooks/__mocks__/useFarmContract";
import { testHook, waitFor } from "utils/testing";

jest.mock("hooks/useFarmContract");

describe("useFarmInfo", () => {
  it("returns default values", async () => {
    let farmInfo: any;
    await waitFor(() =>
      testHook(() => ({ farmInfo } = useFarmInfo("0xFARM", "0x000000000")))
    );
    expect(farmInfo?.stakedAddress).toBe(null);
    expect(farmInfo?.rewardPerStake).toBe(0);
    expect(farmInfo?.stakedBalance).toBe(0);
    expect(farmInfo?.rewardPerBlock).toBe(0);
    expect(farmInfo?.allocPoint).toBe(0);
    expect(farmInfo?.startBlock).toBe(0);
    expect(farmInfo?.lastRewardBlock).toBe(0);
    expect(farmInfo?.rewardAlloc).toBe(0);
    expect(farmInfo?.id).toBe(null);
  });
  it("returns correct values rounded to 5 dp", async () => {
    let farmInfo: any;
    await waitFor(() =>
      testHook(
        () =>
          ({ farmInfo } = useFarmInfo(
            FARMER_1.farmAddress,
            FARM_1.stakedAddress
          ))
      )
    );
    expect(farmInfo?.stakedAddress).toBe(FARM_1.stakedAddress);
    expect(farmInfo?.rewardPerStake).toBe(0.00007);
    expect(farmInfo?.stakedBalance).toBe(100);
    expect(farmInfo?.rewardPerBlock).toBe(0.00667);
    expect(farmInfo?.allocPoint).toBe(50);
    expect(farmInfo?.rewardAlloc).toBe(43096.58);
    expect(farmInfo?.startBlock).toBe(8941560);
    expect(farmInfo?.lastRewardBlock).toBe(15406047);
  });
});
