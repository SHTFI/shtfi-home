export interface LocalStorageInterface {
  get: (key: string) => string | null;
  set: (key: string, value: string) => string | null;
  remove: (key: string) => void;
  clear: () => void;
}

type Colors =
  | "light-blue"
  | "blue"
  | "dark-blue"
  | "brown"
  | "dark-brown"
  | "light"
  | "dark";

type Sizes = "tiny" | "small" | "medium" | "large" | "full-width";

type CoinDistribution = {
  supply: number | string;
  devFund: number | string;
  preMine: number | string;
  marketing: number | string;
  farm: number | "percent";
};

interface SocialLinksData {
  github?: SocialLink;
  twitter?: SocialLink;
  telegram?: SocialLink;
  facebook?: SocialLink;
  linkedin?: SocialLink;
}

type SocialLink = {
  profileUrl: string;
  profileName: string;
};

type FarmToken = {
  icon: string;
  name: string;
  ticker: string;
  description: string;
  url: string;
  contract: string;
};

interface FarmSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  stakedToken: FarmToken;
  rewardToken: FarmToken;
}
