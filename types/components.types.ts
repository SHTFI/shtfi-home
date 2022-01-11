import { FarmToken, FarmingPairData } from "types";

export interface FarmSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  farms: FarmingPairData[];
}

export interface FarmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stakedToken: FarmToken;
  rewardToken: FarmToken;
  farmAddress: string;
}
