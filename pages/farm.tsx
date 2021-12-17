import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import {
  Header,
  FarmIntroSection,
  FarmSelectSection,
  FarmMeta,
} from "components";

const Farm: NextPage = () => {
  return (
    <StyledWrapper>
      <Head>
        <FarmMeta />
      </Head>
      <Header
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/icons/shtfi/shtfi-bg.svg"
        logoAlt="SHTFI logo"
        socialIcons={true}
      />
      <FarmIntroSection />
      <FarmSelectSection />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;
export default Farm;
