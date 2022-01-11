import { useState, useEffect } from "react";
import { useWeb3 } from "hooks";
import { injectedWeb3 } from "context";
/**
 * Function to try to connect to the user's web3 wallet in the event they have a browser instance
 */
const useEagerConnect = (): boolean => {
  // Get the active and activate methods from the web3 lib
  const { activate, active, library } = useWeb3();
  // Prevent an infinite loop by setting a state to determine if we have tried to connect already
  const [tried, setTried] = useState<boolean>(false);
  const [trying, setTrying] = useState<boolean>(false);
  // Use effect to attempt to connect on mount
  useEffect(() => {
    let mounted = true;
    // Stop infinite loops
    if (trying || tried || active || library?.provider.isMetaMask) return;
    // Ensure activate is a function
    if (typeof activate !== "function") return;
    // Stop excessive trying
    setTrying(true);
    // Check if the injected connector is already authorised
    injectedWeb3.isAuthorized().then(async (auth: boolean) => {
      // Are we authorised?
      if (auth === true) {
        // if so activate our instance
        activate(injectedWeb3, undefined, true).catch((e) => console.warn(e));
      }
    });

    if (mounted) {
      // set tried to true and wait until we are activated
      setTrying(false);
      setTried(true);
    }
    return () => {
      mounted = false;
    };
  }, [
    activate,
    trying,
    tried,
    active,
    library?.provider.isMetaMask,
    library?.provider,
  ]);
  // Use another effect to check if the we are active and, if so, set tried to true
  useEffect(() => {
    if (!tried && active && !trying) {
      setTried(true);
    }
  }, [tried, active, trying]);
  return tried;
};

export default useEagerConnect;
