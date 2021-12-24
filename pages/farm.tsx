import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import {
  Header,
  Web3ReactManager,
  FarmIntroSection,
  FarmSelectSection,
  Meta,
} from "components";
import { SHTFI_FARMS } from "utils";

const Farm: NextPage = () => {
  return (
    <Web3ReactManager>
      <StyledWrapper>
        <Head>
          <Meta
            title="Farms | SHTFI.io | Open Source Yield Farming and Defi Protocol"
            url="https://shtfi.io/farm"
            description="Welcome to the SHTFI farms. Here you will be able to stake various cryptocurrencies and receive SHTFI as a reward"
            name="SHTFI"
            image="https://shtfi.io/assets/images/social-cards/social-card-1000-500.jpeg"
          />
        </Head>
        <Header
          title="SHTFI"
          subTitle="Stop Helping The Finance Industry"
          logo="/assets/icons/shtfi/shtfi-bg.svg"
          logoAlt="SHTFI logo"
          socialIcons={true}
        />
        <FarmIntroSection />
        <FarmSelectSection farms={SHTFI_FARMS} />
      </StyledWrapper>
    </Web3ReactManager>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;
export default Farm;
