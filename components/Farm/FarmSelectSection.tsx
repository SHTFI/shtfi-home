import { Input, Card, Button } from "components";
import styled from "styled-components";
import Image from "next/image";
const FarmSelectSection: React.FC = () => {
  return (
    <StyledFarmSection>
      <Input placeholder="Search for coin" button={true} />
      <StyledFarmCard>
        <StyledFarmHeader>
          <StyledFarmHeaderIcons>
            <StyledTokenIcon>
              <Image
                src="/assets/images/tokens/squid-150-150.png"
                alt="Squid Game Token Icon"
                width="50px"
                height="50px"
              />
            </StyledTokenIcon>
            <StyledTokenIcon>
              <Image
                src="/assets/icons/shtfi/shtfi-bg.svg"
                alt="Squid Game Token Icon"
                width="75px"
                height="75px"
              />
            </StyledTokenIcon>
          </StyledFarmHeaderIcons>
          <StyledFarmHeaderMeta>
            <p>
              Stake: <span>SQUID</span>
            </p>
            <p>
              Get: <span>SHTFI</span>
            </p>
          </StyledFarmHeaderMeta>
        </StyledFarmHeader>
        <StyledFarmInfo>
          <p>
            Total SQUID: <span>123,123</span>
          </p>
          <p>
            SHTFI per block: <span>0.02</span>
          </p>
          <p>
            SHTFI per SQUID: <span>0.00000001234</span>
          </p>
        </StyledFarmInfo>
        <StyledFarmActions>
          <StyledFarmAction>
            <StyledFarmActionInfo>
              <span>Your Stake:</span>
              <span>222222 SQUID</span>
            </StyledFarmActionInfo>
            <StyledFarmActionButton size="med">Unstake</StyledFarmActionButton>
          </StyledFarmAction>
          <StyledFarmAction>
            <StyledFarmActionInfo>
              <span>Your Rewards:</span>
              <span>222 SHTFI</span>
            </StyledFarmActionInfo>
            <StyledFarmActionButton size="med">Claim</StyledFarmActionButton>
          </StyledFarmAction>
          <StyledFarmAction justify="center">
            <StyledFarmActionButton size="med">Stake</StyledFarmActionButton>
          </StyledFarmAction>
        </StyledFarmActions>
      </StyledFarmCard>
    </StyledFarmSection>
  );
};

const StyledFarmSection = styled.section``;

const StyledFarmCard = styled(Card)`
  border: 3px solid var(--blue);
  margin: calc(var(--large-space) * 3) auto;
  border-radius: calc(var(--large-space) * 3);
`;

const StyledFarmHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const StyledFarmHeaderIcons = styled.div`
  display: inline-block;
  position: relative;
  width: 85px;
  height: 75px;
  margin-right: var(--large-space);
`;

const StyledTokenIcon = styled.div`
  position: absolute;
  display: inline-block;

  &:first-child {
    left: 0;
    top: 12.5px;
    width: 50px;
    height: 50px;
  }

  &:nth-child(2) {
    left: 12.5px;
    top: 0;
    width: 75px;
    height: 75px;
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
export default FarmSelectSection;
