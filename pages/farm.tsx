import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Header, FarmIntroSection, FarmSelectSection, Meta } from "components";
import { FarmToken } from "types";

const Farm: NextPage = () => {
  return (
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
      <FarmSelectSection
        stakedToken={
          {
            ticker: "SQUID",
            icon: "/assets/images/tokens/squid-75-75.png",
            name: "Squid Token",
            url: "https://squid.com",
            contract: "contract",
            description: "This is a coin that which was rugged.",
          } as FarmToken
        }
        rewardToken={
          {
            ticker: "SHTFI",
            icon: "/assets/images/tokens/shtfi-125-125.jpeg",
            name: "SHTFI Token",
            url: "https://shtfi.io",
            contract: "contract",
            description: "This is a coin that which was not rugged.",
          } as FarmToken
        }
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;
export default Farm;
