import styled from "styled-components";
import { Heading } from "components";

const IntroSection: React.FC = () => {
  return (
    <StyledIntroSection id="intro">
      <Heading text="Yield Farming Like Never Before" level={2} />
      <p>
        SHTFI is a brand new yield farming and defi protocol with a unique
        distribution mechanism which will see 0 pre-mine and 0 dev fund.
      </p>
    </StyledIntroSection>
  );
};

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
export default IntroSection;
