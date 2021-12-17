import styled from "styled-components";
import { Heading } from "components";
const FarmIntroSection: React.FC = () => {
  return (
    <StyledIntroSection>
      <Heading level={2} text="SHTFI FARMS" />
      <p>
        Use the input field below to search for a SHTFI farm. Please remember
        that the smart contracts which govern these farms have been made as a
        side project and that you use them at your own risk.
      </p>
    </StyledIntroSection>
  );
};
const StyledIntroSection = styled.section`
  padding: var(--large-space);
`;
export default FarmIntroSection;
