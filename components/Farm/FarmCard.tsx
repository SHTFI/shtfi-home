import Image from "next/image";
import { FarmCardProps } from "types";
import styled from "styled-components";
import { Card, Button } from "components";

const FarmCard: React.FC<FarmCardProps> = ({ stakedToken, rewardToken }) => {
  return (
    <StyledFarmCard>
      <StyledFarmHeader>
        <StyledFarmHeaderIcons>
          <StyledTokenIcon>
            <Image
              src={rewardToken.icon}
              alt={`${rewardToken.name} icon`}
              width="75px"
              height="75px"
            />
          </StyledTokenIcon>
          <StyledTokenIcon>
            <Image
              src={stakedToken.icon}
              alt={`${stakedToken.name} icon`}
              width="50px"
              height="50px"
            />
          </StyledTokenIcon>
        </StyledFarmHeaderIcons>
        <StyledFarmHeaderMeta>
          <p>
            Stake: <span>{stakedToken.ticker}</span>
          </p>
          <p>
            Get: <span>{rewardToken.ticker}</span>
          </p>
        </StyledFarmHeaderMeta>
      </StyledFarmHeader>
      <StyledFarmInfo>
        <p>
          Total {stakedToken.ticker}: <span>123,123</span>
        </p>
        <p>
          {rewardToken.ticker} per block: <span>0.02</span>
        </p>
        <p>
          {rewardToken.ticker} per {stakedToken.ticker}:{" "}
          <span>0.00000001234</span>
        </p>
      </StyledFarmInfo>
      <StyledFarmActions>
        <StyledFarmAction>
          <StyledFarmActionInfo>
            <span>Your Stake:</span>
            <span>222222 {stakedToken.ticker}</span>
          </StyledFarmActionInfo>
          <StyledFarmActionButton
            id={`unstake-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Unstake
          </StyledFarmActionButton>
        </StyledFarmAction>
        <StyledFarmAction>
          <StyledFarmActionInfo>
            <span>Your Rewards:</span>
            <span>222 {rewardToken.ticker}</span>
          </StyledFarmActionInfo>
          <StyledFarmActionButton
            id={`claim-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Claim
          </StyledFarmActionButton>
        </StyledFarmAction>
        <StyledFarmAction justify="center">
          <StyledFarmActionButton
            id={`stake-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Stake
          </StyledFarmActionButton>
        </StyledFarmAction>
      </StyledFarmActions>
    </StyledFarmCard>
  );
};

const StyledFarmCard = styled(Card)`
  border: 3px solid var(--blue);
  margin: var(--large-space);
  border-radius: calc(var(--large-space) * 3);
`;

const StyledFarmHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: calc(var(--large-space) * 2) var(--large-space);
`;

const StyledFarmHeaderIcons = styled.div`
  display: inline-block;
  position: relative;
  width: 81.25px;
  height: 62.5px;
  margin-right: var(--large-space);
`;

const StyledTokenIcon = styled.div`
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;

  &:first-child {
    left: 0;
    top: 0;
    width: 62.5px;
    height: 62.5px;
  }

  &:nth-child(2) {
    left: 31.25px;
    top: 6.25px;
    width: 50px;
    height: 50px;
  }
`;

const StyledFarmHeaderMeta = styled.div`
  align-self: center;

  p {
    > span {
      font-weight: bold;
    }
  }
`;

const StyledFarmInfo = styled.div`
  font-size: var(--meta-font);
  font-weight: bold;
  margin: var(--large-space);
  > p {
    > span {
      font-weight: normal;
    }
  }
`;

const StyledFarmActions = styled.div``;

const StyledFarmAction = styled.div<{ justify?: string }>`
  display: flex;
  margin: var(--large-space);

  &:last-of-type {
    margin-top: calc(var(--large-space) * 2);
  }

  ${(props) => {
    const { justify } = props;
    return `
      justify-content: ${!!justify ? justify : "space-between"};
    `;
  }}
`;
const StyledFarmActionInfo = styled.div`
  align-self: center;
  > span {
    display: block;
  }

  > span:first-child {
    font-size: var(--meta-font);
  }
  > span:nth-child(2) {
    font-size: var(--reg-font);
    font-weight: bold;
    margin-right: auto;
  }
`;

const StyledFarmActionButton = styled(Button)`
  align-self: center;
`;

export default FarmCard;
