import { Input } from "components";
import styled from "styled-components";
import FarmCard from "./FarmCard";

const FarmSelectSection: React.FC<FarmSectionProps> = ({ farms, ...rest }) => {
  return (
    <StyledFarmSection {...rest}>
      <Input placeholder="Search for coin" button={true} />
      <StyledFarmCards>
        {farms.map(({ stakedToken, rewardToken }, i) => (
          <FarmCard
            key={`${stakedToken.ticker}-${rewardToken.ticker}-card-${i}`}
            stakedToken={stakedToken}
            rewardToken={rewardToken}
            farmAddress={farms[0].contract[97]}
          />
        ))}
      </StyledFarmCards>
    </StyledFarmSection>
  );
};

const StyledFarmSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledFarmCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  padding: calc(var(--large-space) * 2) 0;
`;

export default FarmSelectSection;
