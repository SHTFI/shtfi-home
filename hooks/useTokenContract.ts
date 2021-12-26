import { useState } from "react";
import { erc20Abi } from "config";
import { Contract } from "@ethersproject/contracts";
import { useWeb3 } from "hooks";
// Hook to get the current state of a token contract
const useTokenContract = () => {
  // Get the web3 lib
  const { library } = useWeb3();
  // set a state
  const [tokenContract, setTokenContract] = useState<Contract>();
  // Make a callback
  const setActiveTokenContract = (address: string) => {
    // Make a contract
    const contract = new Contract(address, erc20Abi, library);
    // Check we have a contract
    if (contract instanceof Contract) {
      // Set it in the state
      setTokenContract(contract);
    }
  };
  // Return the contract instance and the callback to set a new one
  return { tokenContract, setActiveTokenContract };
};

export default useTokenContract;
