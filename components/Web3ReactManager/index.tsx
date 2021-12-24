import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { networkWeb3 } from "context";
import { useEagerConnect, useInactiveListener } from "hooks";
/**
 * Functional component to handle web3 connections
 */

const Web3ReactManager: React.FC = ({ children }) => {
  // Get the status of our injected connector
  const { active: injectedActive } = useWeb3React();
  // Get the status of the network connector
  const {
    activate: activateNetwork,
    active: networkActive,
    error: networkError,
  } = useWeb3React("Network");
  // Try and connect using the eager connect hook
  const triedEager = useEagerConnect();
  // Use effect to try and connect to network when injected is not available for whatever reasib
  useEffect(() => {
    // If we have tried eager and injected isn't active then activate network
    if (triedEager && !networkActive && !networkError && !injectedActive) {
      activateNetwork(networkWeb3);
    }
  }, [
    triedEager,
    networkActive,
    injectedActive,
    networkError,
    activateNetwork,
  ]);

  // If tried eager is falsy then add our inactive listener
  useInactiveListener(!triedEager);

  // Don't do anything until tried eager has done its thing
  if (!triedEager) return null;

  // If we don't have an account context and there's a network error something has gone wrong
  if (!injectedActive && networkError) {
    console.info("Something went tits up with web3");
    console.error(networkError);
    return null;
  }

  // If neither injected or network is active we must be loading
  if (!injectedActive && !networkActive) {
    console.info("Loading web3");
    return null;
  }

  return <>{children}</>;
};

export default Web3ReactManager;
