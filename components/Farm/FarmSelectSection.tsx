import { Input } from "components";
import { useWeb3 } from "hooks";
import styled from "styled-components";
import FarmCard from "./FarmCard";

const FarmSelectSection: React.FC<FarmSectionProps> = ({ farms, ...rest }) => {
  const { active, library, account } = useWeb3();
  if (active && account) {
    console.log(library?.getBlockNumber());
  }
  return (
    <StyledFarmSection {...rest}>
      <Input placeholder="Search for coin" button={true} />
      <StyledFarmCards>
        {farms.map(({ stakedToken, rewardToken }, i) => (
          <FarmCard
            key={`${stakedToken.ticker}-${rewardToken.ticker}-card-${i}`}
            stakedToken={stakedToken}
            rewardToken={rewardToken}
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
