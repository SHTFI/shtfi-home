import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Tokenomics,
  Meta,
  IntroSection,
  FeaturesSection,
} from "components";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledWrapper>
      <Head>
        <Meta />
      </Head>
      <StyledMain>
        <Header
          title="SHTFI"
          subTitle="Open Source Yield Farming and Defi Protocol"
          logo="/assets/icons/shtfi/shtfi-bg.svg"
          logoAlt="SHTFI logo"
          socialIcons={true}
        />
        <IntroSection />
        <Tokenomics
          supply={Number(222222).toLocaleString()}
          marketing={0}
          devFund={0}
          farm={100}
          preMine={0}
          showPercent={["farm"]}
          showLarge={["farm", "supply", "devFund", "marketing", "preMine"]}
          id="tokenomics"
        />
        <FeaturesSection />
      </StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;
const StyledMain = styled.main``;

export default Home;
