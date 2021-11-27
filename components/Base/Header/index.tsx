import styled from "styled-components";
import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  logo,
  logoAlt,
  children,
  ...rest
}) => {
  return (
    <StyledHeader {...rest}>
      {logo && (
        <StyledHeaderLogo>
          <img src={logo} alt={logoAlt} width={75} height={75} />
        </StyledHeaderLogo>
      )}
      <StyledHeaderContent>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
      </StyledHeaderContent>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: var(--light-blue);
  padding: 4rem calc(var(--large-space) * 1.25) var(--large-space)
    calc(var(--large-space) * 1.25);
  border-radius: 0 0 calc(var(--radius-large) * 3) calc(var(--radius-large) * 3);
  justify-content: center;
  align-items: center;
  margin-bottom: calc(var(--large-space) * 4);
`;

const StyledHeaderLogo = styled.picture`
  margin-right: 1ch;
`;

const StyledHeaderContent = styled.div`
  h1 {
    font-size: var(--head-font);
    margin: 0 0 var(--small-space);
  }

  p {
    font-size: var(--meta-font);
    margin: 0;
  }
`;

export default Header;
