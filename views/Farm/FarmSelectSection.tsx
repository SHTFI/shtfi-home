import { Input, Card } from "components";
import styled from "styled-components";

const FarmSelectSection: React.FC = () => {
  return (
    <StyledFarmSection>
      <Input placeholder="Search for coin" button={true} />
      <StyledFarmCard>FARM</StyledFarmCard>
    </StyledFarmSection>
  );
};

const StyledFarmSection = styled.section``;

const StyledFarmCard = styled(Card)`
  border: 3px solid var(--blue);
  margin: calc(var(--large-space) * 3) auto;
`;

export default FarmSelectSection;
