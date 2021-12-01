import styled from "styled-components";
import { FooterTileProps } from "../types";

const FooterTile: React.FC<FooterTileProps> = ({ children, ...rest }) => {
  return <StyledFooterTile {...rest}>{children}</StyledFooterTile>;
};

const StyledFooterTile = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: auto;
    align-self: center;
    min-width: 20ch;

    li {
      margin: 0;
      padding: 0;
      font-weight: 100;
      font-size: var(--meta-font);
    }
  }
`;
export default FooterTile;
