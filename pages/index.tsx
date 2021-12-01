import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Card,
  Header,
  Heading,
  Slider,
  Shapes,
  TextIcon,
  Tokenomics,
  Modal,
} from "components";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledWrapper>
      {/* Head section */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        {/* Header section */}
        <Header
          title="SHTFI"
          subTitle="Stop Helping The Finance Industry"
          logo="/assets/icons/shtfi-bg.svg"
          logoAlt="SHTFI logo"
        />
        {/* Intro section */}
        <StyledIntroSection>
          <Shapes background={true} />
          <Heading text="Yield Farming Like Never Before" level={2} />
          <p>
            SHTFI is a brand new protocol with a unique distribution mechanism
            which will see 0 pre-mine and 0 dev fund.
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
          showLarge={["farm", "supply"]}
        />
        {/* Card section */}
        <StyledCardSection>
          <Card>
            <Shapes
              background={false}
              size="tiny"
              style={{ margin: "calc(var(--large-space) * 2) auto" }}
            />
            <StyledCardContent>
              <Heading
                level={3}
                text="NFTs? Why not!?"
                style={{ marginTop: 0 }}
              />
              <p>
                The SHTFI protocol will not be without its own set of useless
                NFTs which, in reality, mean nothing whatsoever. That doesn't
                mean you can't still tell yourself you own a unique picture of
                poop which no-one else has!
              </p>
              <Modal buttonLabel="But, Why?">
                <div>
                  <Heading text="Because we can!" level={4} />
                  <p>
                    NFTs have become all the rage for reasons that are beyond
                    the point of fungibility and the SHTFI protocol is all about
                    being pointless. So let's do it! Let's make some NFTs!
                  </p>
                </div>
              </Modal>
            </StyledCardContent>
          </Card>
        </StyledCardSection>
        {/* Slider section */}
        <StyledSliderSection>
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
                copy="SHTFI was built as a side project by Making Stuffs (Paul Singh) and was not made with the intention of becoming a moon shit, I mean shot."
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
  padding: 0 var(--large-space);
`;
const StyledCardSection = styled.section`
  padding: calc(var(--large-space) * 6) 0;
  position: relative;
  &::after {
    width: 100%;
    height: 50%;
    border-radius: 0 0 calc(var(--radius-large) * 2)
      calc(var(--radius-large) * 2);
    background-color: var(--blue);
    position: absolute;
    bottom: 0;
    content: "";
    z-index: -1;
  }
`;
const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--large-space);
  > h3 {
    text-align: center;
    font-size: var(--head-font);
  }
`;
const StyledSliderSection = styled.section`
  padding: calc(var(--large-space) * 6) 0;
`;
export default Home;
