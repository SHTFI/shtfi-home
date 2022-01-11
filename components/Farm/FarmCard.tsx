import Image from "next/image";
import styled from "styled-components";
import { Card, Button } from "components";
import { useFarmerInfo, useFarmInfo } from "hooks";
import { useWeb3 } from "hooks";
import { isMetaMaskInstalled } from "utils";
import { injectedWeb3 } from "context";
import { FarmCardProps } from "types";

const FarmCard: React.FC<FarmCardProps> = ({
  stakedToken,
  rewardToken,
  farmAddress,
}) => {
  // Get account from web3 hook
  const { account, library, active, activate } = useWeb3();
  const { farmInfo } = useFarmInfo(farmAddress, stakedToken.contract[97]);
  const { farmerInfo } = useFarmerInfo(
    account,
    farmInfo?.address,
    farmInfo?.id
  );

  if (!!!farmInfo || !!!farmerInfo) return null;

  const connectToMetaMask = (active: boolean) => {
    if (window.ethereum.isMetaMask) {
      activate(injectedWeb3, undefined, true);
    }
  };
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
          Total {stakedToken.ticker}: <span>{farmInfo?.stakedBalance}</span>
        </p>
        <p>
          {rewardToken.ticker} per block:{" "}
          <span>~{farmInfo?.rewardPerBlock}</span>
        </p>
        <p>
          {rewardToken.ticker} per {stakedToken.ticker}:{" "}
          <span>~{farmInfo.rewardPerStake}</span>
        </p>
      </StyledFarmInfo>

      <StyledFarmActions data-connected={!!account && active}>
        <StyledFarmAction aria-hidden={!account}>
          <StyledFarmActionInfo>
            <span>Your Stake:</span>
            <span>
              {farmerInfo.stakedBalance} {stakedToken.ticker}
            </span>
          </StyledFarmActionInfo>
          <StyledFarmActionButton
            id={`unstake-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Unstake
          </StyledFarmActionButton>
        </StyledFarmAction>
        <StyledFarmAction aria-hidden={!account}>
          <StyledFarmActionInfo>
            <span>Your Rewards:</span>
            <span>
              ~{farmerInfo.pendingRewards} {rewardToken.ticker}
            </span>
          </StyledFarmActionInfo>
          <StyledFarmActionButton
            id={`claim-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Claim
          </StyledFarmActionButton>
        </StyledFarmAction>
        <StyledFarmAction justify="center" aria-hidden={!account}>
          <StyledFarmActionButton
            id={`stake-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="med"
          >
            Stake
          </StyledFarmActionButton>
        </StyledFarmAction>
        <StyledFarmAction data-login aria-hidden={!!account}>
          <StyledFarmActionButton
            id={`login-${stakedToken.ticker}-${rewardToken.ticker}`}
            size="large"
            onClick={() => connectToMetaMask(active)}
          >
            {isMetaMaskInstalled() ? "Connect to MetaMask" : "Install MetaMask"}
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

const StyledFarmActions = styled.div`
  position: relative;
  &[data-connected="true"] {
    > div {
      transition: opacity 0.3s ease 0s, visibility 0.1s ease 0.3s;
    }
    > div:not([data-login]) {
      opacity: 1;
      visibility: visible;
    }
    > div[data-login] {
      opacity: 0;
      visibility: hidden;
    }
  }
  &[data-connected="false"] {
    > div {
      transition: opacity 0.3s ease 0.1s, visibility 0.1s ease 0s;
    }
    > div:not([data-login]) {
      opacity: 0;
      visibility: hidden;
    }

    > div[data-login] {
      opacity: 1;
      visibility: visible;
    }
  }
`;

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

  &[data-login] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
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
