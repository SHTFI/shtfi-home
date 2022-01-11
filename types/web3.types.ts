export type CoinDistribution = {
  supply: number | string;
  devFund: number | string;
  preMine: number | string;
  marketing: number | string;
  farm: number | "percent";
};

export type FarmToken = {
  icon: string;
  name: string;
  ticker: string;
  description: string;
  url: string;
  contract: Contract;
};

export interface FarmingPairData {
  contract: Contract;
  chain: Chain;
  stakedToken: FarmToken;
  rewardToken: FarmToken;
}

export interface Contract {
  56: string;
  97: string;
}

export type Chain = 97;

// taken from ethers.js, compatible interface with web3 provider
export type AsyncSendable = {
  isMetaMask?: boolean;
  host?: string;
  path?: string;
  sendAsync?: SendAsync;
  send?: (request: any, callback: SendAsyncCallback) => void;
};

export type SendAsyncRequest = {
  jsonrpc: "2.0";
  id: number | string | null;
  method: string;
  params: unknown[] | object;
};

export type SendAsyncCallback = (error: any, response: any) => void;

export type SendAsync = (
  request: SendAsyncRequest,
  callback: SendAsyncCallback
) => void;

export type MiniRpcRequest = (
  method: MiniRpcRequestMethod,
  params: MiniRpcRequestParams
) => Promise<unknown>;

export type MiniRpcRequestMethod =
  | string
  | { method: string; params?: MiniRpcRequestParams };
export type MiniRpcRequestParams = unknown[] | object;

export type NetworkConnectorArguments = {
  urls: { [chainId: number]: string };
  defaultChainId?: number;
};

export interface FarmerInfo {
  userAddress: string | null | undefined;
  farmAddress: string | null | undefined;
  farmId: number | string | null | undefined;
  pendingRewards: number;
  stakedBalance: number;
  claimedRewards: number;
  lastClaimBlock: number;
  totalRewards: number;
}

export interface FarmInfo {
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
