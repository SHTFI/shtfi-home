import { createWeb3ReactRoot } from "@web3-react/core";
const DefaultWeb3NetworkProvider = createWeb3ReactRoot("Network");

const DefaultWeb3NetworkProviderSSR: React.FC<{ getLibrary: any }> = ({
  children,
  getLibrary,
}) => {
  return (
    <DefaultWeb3NetworkProvider getLibrary={getLibrary}>
      {children}
    </DefaultWeb3NetworkProvider>
  );
};

export default DefaultWeb3NetworkProviderSSR;
