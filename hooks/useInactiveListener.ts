import { useEffect } from "react";
import { useWeb3 } from "hooks";
import { injectedWeb3 } from "context";
/**
 * Hook to listen to the web3 instance and react to events it emits
 */

const useInactiveListener = (suppress: boolean = false) => {
  // Get our lib methods
  const { error, active, activate } = useWeb3();
  // Use effect to do manage updates to the instance
  useEffect(() => {
    // Get the ethereum instance if the window has one
    const { ethereum } = window as any;
    // Check if ethereum is defined, inactive, unsuppressed  and without error
    if (ethereum && ethereum.on && !active && !suppress && !error) {
      // Handler for the connect event
      const handleConnect = () => {
        console.info("Attempting to connect to web3");
        // try to activate the injected instance
        activate(injectedWeb3);
      };
      // Handler for changing the chain ID
      const handleChainChange = (chainId: string | number) => {
        console.info(`Attempting to change to chain with the ID: ${chainId}`);
        activate(injectedWeb3);
      };
      // Handler for changing account
      const handleAccountChange = (accounts: string[]) => {
        console.info(
          `Attempting to activate the following accounts: `,
          accounts
        );
        if (accounts.length > 0) {
          activate(injectedWeb3);
        }
      };
      // Add our listeners using the ethereum.on method
      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChange);
      ethereum.on("accountsChanged", handleAccountChange);
      // Clean up after ourselves so we don't end up with multiple listeners for each event
      return () => {
        // Ensure the removeListener method is available
        if (ethereum.removeListener) {
          // Remove our listeners
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChange);
          ethereum.removeListener("accountsChanged", handleAccountChange);
        }
      };
    }
  }, [active, error, suppress, activate]);
};
export default useInactiveListener;
