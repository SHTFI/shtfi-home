import styled from "styled-components";
import { FooterProps } from "../types";

const Footer: React.FC<FooterProps> = ({ children, ...rest }) => {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
};

const StyledFooter = styled.footer`
  background-color: var(--blue);
  padding: var(--large-space);
  color: var(--light);
`;
export default Footer;
