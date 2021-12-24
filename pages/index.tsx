import type { NextPage } from "next";
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
      <Meta
        title="SHTFI.io | Open Source Yield Farming and Defi Protocol"
        url="https://shtfi.io/"
        description="SHTFI is a brand new yield farming and defi protocol with a unique distribution mechanism which will see 0 pre-mine and 0 dev fund."
        name="SHTFI"
        image="https://shtfi.io/assets/images/social-cards/social-card-1000-500.jpeg"
      />
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
