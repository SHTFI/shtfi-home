import styled from "styled-components";
import { TokenomicsProps } from "components/ShtfiUi/types";
import { Heading } from "components/ShtfiUi";

const Tokenomics: React.FC<TokenomicsProps> = ({
  color,
  marketing,
  supply,
  devFund,
  farm,
  preMine,
  showPercent,
  showLarge,
  children,
  ...rest
}) => {
  return (
    <StyledTokenomics color={color} {...rest}>
      {children}
      <StyledTokenomicsContent>
        <Heading level={2} text="Tokenomics" />
        <StyledTokenomicsData
          data-large={showLarge?.includes("devFund") ? "true" : "false"}
        >
          <span>{`${devFund}${
            showPercent?.includes("devFund") ? "%" : ""
          }`}</span>
          <h4>Dev Fund</h4>
        </StyledTokenomicsData>
        <StyledTokenomicsData
          data-large={showLarge?.includes("preMine") ? "true" : "false"}
        >
          <span>{`${preMine}${
            showPercent?.includes("preMine") ? "%" : ""
          }`}</span>
          <h4>Pre Mine</h4>
        </StyledTokenomicsData>
        <StyledTokenomicsData
          data-large={showLarge?.includes("marketing") ? "true" : "false"}
        >
          <span>{`${marketing}${
            showPercent?.includes("marketing") ? "%" : ""
          }`}</span>
          <h4>Marketing</h4>
        </StyledTokenomicsData>
        <StyledTokenomicsData
          data-large={showLarge?.includes("supply") ? "true" : "false"}
        >
          <span>{`${supply}${
            showPercent?.includes("supply") ? "%" : ""
          }`}</span>
          <h4>Max Supply</h4>
        </StyledTokenomicsData>
        <StyledTokenomicsData
          data-large={showLarge?.includes("farm") ? "true" : "false"}
        >
          <span>{`${farm}${showPercent?.includes("farm") ? "%" : ""}`}</span>
          <h4>SHTFI Farm</h4>
        </StyledTokenomicsData>
      </StyledTokenomicsContent>
    </StyledTokenomics>
  );
};

const StyledTokenomics = styled.section<{ color?: string }>`
  ${({ color }): string => {
    return `
      background: ${
        !!color
          ? `var(--${color})`
          : "linear-gradient(45deg, var(--blue), var(--dark-blue))"
      };
      color: white;
      position: relative;
      padding: calc(var(--large-space) * 6) 25%;
      transform: rotate(5deg);
      width: 150%;
      margin: calc(var(--large-space) * 4) 0 calc(var(--large-space) * 4) -25%;
      position: relative;
      
      &::before {
        content: "";
        position: absolute;
        height: 50%;
        width: 75%;
        background: url("assets/icons/plunger.svg");
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: center;
        z-index: -1;
        opacity: 0.1;
        left: 0;
      }
      `;
  }}
`;

const StyledTokenomicsContent = styled.div`
  display: flex;
  flex-direction: row;
  transform: rotate(-5deg);
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;

  > h2 {
    width: 100%;
    flex-basis: 100%;
    margin-bottom: calc(var(--large-space) * 4);
  }
`;

const StyledTokenomicsData = styled.div<{ color?: string }>`
  ${({ color }): string => {
    return `
      display: flex;
      flex-direction: column;
      width: auto;
      margin: var(--med-space) var(--large-space);
      justify-content: center;
      align-items: center;
      
      > h4 {
        font-weight: 100;
        margin: 0;
        font-size: var(--meta-font);
        margin: calc(var(--large-space)) 0;
        white-space: no-wrap;
      }
      
      > span {
        font-size: var(--head-font);
        font-weight: 900;
        letter-spacing: 1.5px;
        line-height: 1;
        white-space: no-wrap;
      }

      &[data-large="true"] {
        > span {
          font-size: calc(var(--head-font) * 1.5);
          color: var(--light-blue);
          text-shadow: var(--shadow);
        }

        > h4 {
          font-size: var(--reg-font);
        }
      }
      `;
  }}
`;

export default Tokenomics;
