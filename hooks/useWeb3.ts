import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

// Hook to return a web3 interface depending on whether the user has brought their own or not
const useWeb3 = (): Web3ReactContextInterface<Web3Provider> => {
  // Get an injected provider (Meta Mask)
  const injected = useWeb3React<Web3Provider>();
  // Get the network provider
  const network = useWeb3React<Web3Provider>("Network");
  // If the injected is active return it else return the network provider
  return injected.active ? injected : network;
};

export default useWeb3;
