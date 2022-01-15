import { useEffect } from "react";
import { useWeb3 } from "hooks";
import { injectedWeb3, networkWeb3 } from "context";
/**
 * Hook to listen to the web3 instance and react to events it emits
 */

const useInactiveListener = (suppress: boolean = false) => {
  // Get our lib methods
  const { error, active, activate } = useWeb3();
  // Use effect to do manage updates to the instance
  useEffect(() => {
    // Get the ethereum instance if the window has one
    const { ethereum } = window;
    // Check if ethereum is defined, inactive, unsuppressed  and without error
    if (!!ethereum && !active && !suppress && !error) {
      // Handler for the connect event
      const handleConnect = () => {
        console.info("Attempting to connect to web3");
        // try to activate the injected instance
        activate(injectedWeb3);
      };
      // Handler for changing the chain ID
      const handleChainChange = (...args: unknown[]) => {
        if (typeof args[0] !== "string" || typeof args[0] !== "number") {
          throw "Argument should be a string or a number";
        }
        console.info(`Attempting to change to chain with the ID: ${args[0]}`);
        activate(injectedWeb3);
      };
      // Handler for changing account
      const handleAccountChange = (...args: unknown[]) => {
        // Ensure args have been passed
        if (!!!args || args.length === 0) {
          throw "You must specify an array of accounts";
        }
        // Iterate them to ensure they are all strings
        for (let i = 0; i < args.length; i++) {
          if (typeof args[i] !== "string") {
            throw "Arguments passed to changeAccounts should be Ethereum addresses";
          }
        }
        console.info(
          `Attempting to activate the following accounts: `,
          JSON.stringify(args)
        );
        activate(injectedWeb3);
      };
      const handleDisconnect = () => {
        activate(networkWeb3);
      };
      // Add our listeners using the ethereum.on method
      ethereum.on("eth_connect", handleConnect);
      ethereum.on("eth_disconnect", handleDisconnect);
      ethereum.on("eth_chainChanged", handleChainChange);
      ethereum.on("eth_accountsChanged", handleAccountChange);
      // Clean up after ourselves so we don't end up with multiple listeners for each event
      return () => {
        // Ensure the removeListener method is available
        if (ethereum.removeListener) {
          // Remove our listeners
          ethereum.removeListener("eth_connect", handleConnect);
          ethereum.removeListener("eth_disconnect", handleDisconnect);
          ethereum.removeListener("eth_chainChanged", handleChainChange);
          ethereum.removeListener("eth_accountsChanged", handleAccountChange);
        }
      };
    }
  }, [active, error, suppress, activate]);
};
export default useInactiveListener;
