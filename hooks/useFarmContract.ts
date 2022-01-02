import { useState } from "react";
import { shtfiFarmAbi } from "config";
import { Contract } from "@ethersproject/contracts";
import { useWeb3 } from "hooks";

// Hook to get the current state of a token contract
const useFarmContract = () => {
  // Get the web3 lib
  const { library } = useWeb3();
  // set a state
  const [farmContract, setFarmContract] = useState<Contract>();
  // Make a callback
  const setActiveFarmContract = (address: string) => {
    // We cannot operate without the library
    if (!!!library) return;
    // Make a contract
    const contract = new Contract(address, shtfiFarmAbi, library);
    // Check we have a contract
    if (contract instanceof Contract) {
      // Set it in the state
      setFarmContract(contract);
    }
  };
  // Return the contract instance and the callback to set a new one
  return { farmContract, setActiveFarmContract };
};

export default useFarmContract;
