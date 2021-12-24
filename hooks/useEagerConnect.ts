import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injectedWeb3 } from "context";
/**
 * Function to try to connect to the user's web3 wallet in the event they have a browser instance
 */
const useEagerConnect = (): boolean => {
  // Get the active and activate methods from the web3 lib
  const { activate, active } = useWeb3React();
  // Prevent an infinite loop by setting a state to determine if we have tried to connect already
  const [tried, setTried] = useState<boolean>(false);
  // Use effect to attempt to connect on mount
  useEffect(() => {
    // Check if the injected connector is already authorised
    injectedWeb3.isAuthorized().then((auth: boolean) => {
      // Are we authorised?
      if (auth) {
        // if so activate our instance
        activate(injectedWeb3, undefined, true).catch(() => {
          // Set the tried state to true if there is an error
          setTried(true);
        });
      } else {
        // Otherwise just set tried to true and wait until we are activated
        setTried(true);
      }
    });
  }, [activate]);
  // Use another effect to check if the we are active and, if so, set tried to true
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
};

export default useEagerConnect;
