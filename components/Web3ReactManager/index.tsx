import { useEffect } from "react";
import { injectedWeb3, networkWeb3 } from "context";
import { useEagerConnect, useInactiveListener } from "hooks";
import { useWeb3 } from "hooks";
/**
 * Functional component to handle web3 connections
 */

const Web3ReactManager: React.FC = ({ children }) => {
  // Try to connect to web3 wallet straight away
  const triedEager = useEagerConnect();
  // Try to connect eagerly
  const { active, library, activate, error } = useWeb3();
  // Use effect to manage connection changes
  useEffect(() => {
    // Has eager finished connecting?
    if (!triedEager) return;
    // Should we try connect to network?
    if (!active && !library?.provider.isMetaMask) {
      // Activate it
      activate(networkWeb3, undefined, true);
    } else if (!active && library?.provider.isMetaMask) {
      // Otherwise activate injected
      activate(injectedWeb3, undefined, true);
    }
  }, [triedEager, active, library?.provider.isMetaMask, activate]);

  // If tried eager is falsy then add our inactive listener
  useInactiveListener(!triedEager);

  // Don't do anything until tried eager has done its thing
  if (!triedEager) return null;

  // If we don't have an account context and there's a network error something has gone wrong
  if (!active && error) {
    console.info("Something went tits up with web3");
    console.error(error);
    return null;
  }

  // If neither injected or network is active we must be loading
  if (!active) {
    console.info("Loading web3");
    return null;
  }

  return <>{children}</>;
};

export default Web3ReactManager;
