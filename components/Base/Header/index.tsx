import styled from "styled-components";
import { SocialLinks } from "components";
import { HeaderProps } from "../types";
const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  logo,
  logoAlt,
  children,
  socialIcons = false,
  ...rest
}) => {
  return (
    <StyledHeader {...rest}>
      {logo && (
        <StyledHeaderLogo>
          <img src={logo} alt={logoAlt} width={125} height={125} />
        </StyledHeaderLogo>
      )}
      <StyledHeaderContent>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
        {socialIcons && <SocialLinks align="right" />}
      </StyledHeaderContent>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  padding: 4rem calc(var(--large-space) * 2) var(--large-space)
    calc(var(--large-space) * 1.25);
  justify-content: center;
  align-items: center;
  margin-top: calc(var(--large-space) * 4);
  margin-bottom: calc(var(--large-space) * 4);
`;

const StyledHeaderLogo = styled.picture`
  margin-right: 1ch;
  > img {
    width: 75px;
    height: 75px;

    @media screen and (min-width: 700px) {
      width: 125px;
      height: 125px;
    }
  }
`;

const StyledHeaderContent = styled.div`
  h1 {
    font-size: var(--head-font);
    margin: 0;

    @media screen and (min-width: 700px) {
      font-size: calc(var(--head-font) * 1.5);
    }
  }

  p {
    font-size: calc(var(--meta-font) * 0.75);
    margin: 0;
    @media screen and (min-width: 700px) {
      font-size: var(--meta-font);
    }
  }
`;

export default Header;
