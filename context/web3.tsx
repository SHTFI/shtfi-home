import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "connectors/networkConnector";

enum ConnectorNames {
  Injected = "Injected",
  Network = "Network",
}

type GetConnectorsByName = {
  [ConnectorName in ConnectorNames]: InjectedConnector | NetworkConnector;
};

// Set the chain ID
const CHAIN_IDS = [97];
// Set the default chain ID
const DEFAULT_CHAIN_ID = 97;
// Set an object with our node urls
const nodeUrls = {
  97: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
  ],
};
// Make an injected web3 connector to connect to meta mask
export const injectedWeb3 = new InjectedConnector({
  supportedChainIds: CHAIN_IDS,
});
// Make a network connector to allow us to show blockchain data without the user bringing meta mask
export const networkWeb3 = new NetworkConnector({
  urls: { [DEFAULT_CHAIN_ID]: nodeUrls[DEFAULT_CHAIN_ID][0] },
  defaultChainId: DEFAULT_CHAIN_ID,
});
// Export an object which allows us to get the connector by name
export const getConnectorsByName: GetConnectorsByName = {
  [ConnectorNames.Injected]: injectedWeb3,
  [ConnectorNames.Network]: networkWeb3,
};
// Export a function to allow us to easily get our web3 library
export const getWeb3Library = (provider: any): Web3Provider =>
  new Web3Provider(provider);
