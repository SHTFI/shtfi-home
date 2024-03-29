import type { NextPage } from "next";
import Head from "next/head";
import {
  Card,
  Header,
  Heading,
  Slider,
  TextIcon,
  Tokenomics,
  Modal,
} from "components";
import Image from "next/image";
import { socialLinksData } from "utils";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledWrapper>
      {/* Head section */}
      <Head>
        <title>{process.env.NEXT_PUBLIC_META_NAME}</title>
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

      <StyledMain>
        {/* Header section */}
        <Header
          title="SHTFI"
          subTitle="Open Source Yield Farming and Defi Protocol"
          logo="/assets/icons/shtfi/shtfi-bg.svg"
          logoAlt="SHTFI logo"
          socialIcons={true}
        />
        {/* Intro section */}
        <StyledIntroSection id="intro">
          <Heading text="Yield Farming Like Never Before" level={2} />
          <p>
            SHTFI is a brand new yield farming and defi protocol with a unique
            distribution mechanism which will see 0 pre-mine and 0 dev fund.
          </p>
        </StyledIntroSection>
        {/* Tokenomics Section */}
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
        <StyledFeaturesSection>
          {/* Card section */}
          <StyledCardSection id="features">
            <Card>
              <StyledCardContent>
                <Image
                  src="/assets/icons/shtfi/toilet-roll.svg"
                  alt="SHTFI toilet roll"
                  width={100}
                  height={100}
                />
                <Heading
                  level={3}
                  text="NFTs? Why not!?"
                  style={{ marginTop: 0 }}
                />
                <p>
                  The SHTFI protocol will not be without its own set of useless
                  NFTs which, in reality, mean nothing whatsoever. That doesnt
                  mean you cant still tell yourself you own a unique picture of
                  poop which no-one else has!
                </p>
                <Modal buttonLabel="But, Why?">
                  <div>
                    <Heading text="Because we can!" level={4} />
                    <p>
                      NFTs have become all the rage for reasons that are beyond
                      the point of fungibility and the SHTFI protocol is all
                      about being pointless. So lets do it! Lets make some NFTs!
                    </p>
                  </div>
                </Modal>
              </StyledCardContent>
            </Card>
          </StyledCardSection>
          {/* Slider section */}
          <StyledSliderSection id="about">
            <Heading level={2} text="What is SHTFI?" />
            <Slider>
              <div>
                <TextIcon
                  heading="Crypto Farm"
                  copy="The most open and, probably, shit crypto farm of all time. Our smart contract was NOT forked from another major project and, as a result, is probably full of vulnerabilities. "
                  icon="farm"
                />
              </div>
              <div>
                <TextIcon
                  heading="Open Sauce"
                  copy="SHTFI is very much like that bottle of ketchup with flies all over it at your local chippy... Open Sauce. In fact, there will be a guide created to teach exactly how to release your own shitty project!"
                  icon="sauce"
                />
              </div>
              <div>
                <TextIcon
                  heading="A Fun Side Project"
                  copy="SHTFI was built as a side and was not made with the intention of becoming a moon shit, I mean shot."
                  icon="game"
                />
              </div>
              <div>
                <TextIcon
                  heading="Decentralised"
                  copy="Yes, SHTFI was created by a one man band, however, it doesn't have to stay this way. Join in, contribute to the GitHub, add to the protocol, let's do this shit together!"
                  icon="chain"
                />
              </div>
            </Slider>
          </StyledSliderSection>
        </StyledFeaturesSection>
      </StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  flex-direction: column;
  display: flex;
`;
const StyledMain = styled.main``;
const StyledIntroSection = styled.section`
  position: relative;
  min-width: 250px;
  min-height: 250px;
  padding: 0 var(--large-space) calc(var(--large-space) * 3) var(--large-space);
  margin: 0 auto;
  max-width: 450px;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: url("/assets/icons/shtfi/toilet-poop.svg");
    background-repeat: no-repeat;
    background-position: right;
  }
`;
const StyledFeaturesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("assets/icons/log-poop.svg");
    opacity: 0.1;
    content: "";
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 75%;
  }
`;
const StyledCardSection = styled.div`
  padding: calc(var(--large-space) * 6) 0;
  position: relative;
`;
const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--large-space);
  > img {
    align-self: center;
    margin-bottom: var(--large-space);
  }
  > h3 {
    text-align: center;
    font-size: var(--head-font);
  }
`;
const StyledSliderSection = styled.div`
  padding: calc(var(--large-space) * 6) 0;
  max-width: 350px;
  min-width: 200px;
  position: relative;
`;
export default Home;
