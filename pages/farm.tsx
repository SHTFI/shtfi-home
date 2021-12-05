import { NextPage } from "next";
import Head from "next/head";
import { socialLinksData } from "utils";
import styled from "styled-components";
import { Header, Heading } from "components";

const Farm: NextPage = () => {
  return (
    <StyledWrapper>
      <Head>
        <title>
          SHTFI Farms | SHTFI Open Source Yield Farming and Defi Protocol
        </title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta
          name="twitter:title"
          content={process.env.NEXT_PUBLIC_META_TITLE}
        />
        <meta
          name="twitter:description"
          content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
        />
        <meta
          name="twitter:image"
          content={process.env.NEXT_PUBLIC_META_IMAGE}
        />
        <meta name="twitter:site" content={`${socialLinksData.twitter}`} />
        <meta name="twitter:creator" content={`${socialLinksData.twitter}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={process.env.NEXT_PUBLIC_META_TITLE}
        />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
        />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_META_IMAGE}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_META_NAME}
        />
      </Head>
      <Header
        title="SHTFI"
        subTitle="Stop Helping The Finance Industry"
        logo="/assets/icons/shtfi/shtfi-bg.svg"
        logoAlt="SHTFI logo"
        socialIcons={true}
      />
      {/* Heading */}
      <StyledIntroSection>
        <Heading level={2} text="SHTFI FARMS" />
        <p>
          Use the input field below to search for a SHTFI farm. Please remember
          that the smart contracts which govern these farms have been made as a
          side project and that you use them at your own risk.
        </p>
      </StyledIntroSection>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;

const StyledIntroSection = styled.section`
  padding: var(--large-space);
`;
export default Farm;
