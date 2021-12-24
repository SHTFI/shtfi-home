import { Web3ReactProvider } from "@web3-react/core";
import { getWeb3Library } from "context";
import dynamic from "next/dynamic";

// Create our network provider -- Render it dynamically with SSR to prevent double definition error
const Web3NetworkProvider = dynamic(
  () => import("context/web3NetworkProvider"),
  { ssr: false }
);

// Define our Provider component
const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getWeb3Library}>
      <Web3NetworkProvider getLibrary={getWeb3Library}>
        {children}
      </Web3NetworkProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
