import styled from "styled-components";
import { Card, Heading, Modal, Slider, TextIcon } from "components";
import Image from "next/image";
const FeaturesSection: React.FC = () => {
  return (
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
              The SHTFI protocol will not be without its own set of useless NFTs
              which, in reality, mean nothing whatsoever. That doesnt mean you
              cant still tell yourself you own a unique picture of poop which
              no-one else has!
            </p>
            <Modal buttonLabel="But, Why?">
              <div>
                <Heading text="Because we can!" level={4} />
                <p>
                  NFTs have become all the rage for reasons that are beyond the
                  point of fungibility and the SHTFI protocol is all about being
                  pointless. So lets do it! Lets make some NFTs!
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
  );
};
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
export default FeaturesSection;
