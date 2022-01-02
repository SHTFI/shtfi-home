interface LocalStorageInterface {
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

type NavLink = {
  href: string;
  title: string;
  label: string;
  icon?: string;
  iconAlt?: string;
};

type FarmToken = {
  icon: string;
  name: string;
  ticker: string;
  description: string;
  url: string;
  contract: Contract;
};

interface FarmingPairData {
  contract: Contract;
  chain: Chain;
  stakedToken: FarmToken;
  rewardToken: FarmToken;
}

interface FarmSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  farms: FarmingPairData[];
}

interface FarmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stakedToken: FarmToken;
  rewardToken: FarmToken;
  farmAddress: string;
}

interface Contract {
  56: string;
  97: string;
}

type Chain = 97;

// taken from ethers.js, compatible interface with web3 provider
type AsyncSendable = {
  isMetaMask?: boolean;
  host?: string;
  path?: string;
  sendAsync?: SendAsync;
  send?: (request: any, callback: SendAsyncCallback) => void;
};

type SendAsyncRequest = {
  jsonrpc: "2.0";
  id: number | string | null;
  method: string;
  params: unknown[] | object;
};

type SendAsyncCallback = (error: any, response: any) => void;

type SendAsync = (
  request: SendAsyncRequest,
  callback: SendAsyncCallback
) => void;

type MiniRpcRequest = (
  method: MiniRpcRequestMethod,
  params: MiniRpcRequestParams
) => Promise<unknown>;

type MiniRpcRequestMethod =
  | string
  | { method: string; params?: MiniRpcRequestParams };
type MiniRpcRequestParams = unknown[] | object;

type NetworkConnectorArguments = {
  urls: { [chainId: number]: string };
  defaultChainId?: number;
};

declare module "jest-next-dynamic";

interface FarmerInfo {
  userAddress: string | null | undefined;
  farmAddress: string | null | undefined;
  farmId: number | string | null | undefined;
  pendingRewards: number;
  stakedBalance: number;
  claimedRewards: number;
  lastClaimBlock: number;
  totalRewards: number;
}

interface FarmInfo {
  address: string | null | undefined;
  stakedAddress: string | null | undefined;
  rewardPerStake: number;
  stakedBalance: number;
  rewardPerBlock: number;
  allocPoint: number;
  rewardAlloc: number;
  startBlock: number;
  lastRewardBlock: number;
  id: number | string | null | undefined;
}
