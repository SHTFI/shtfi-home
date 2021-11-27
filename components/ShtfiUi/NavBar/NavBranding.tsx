import styled from "styled-components";
import { NavBrandingProps } from "../types";

const NavBranding: React.FC<NavBrandingProps> = ({
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  wording,
}) => {
  // If neither logo or wording is provided throw an error
  if (!!!logo && !!!wording) {
    throw new Error(
      "Nav Branding must have receive either the logo or wording props"
    );
  }
  // Return our branding element
  return (
    <StyledBranding href="/" title="Go back home">
      {logo ? (
        <img
          src={logo}
          alt={logoAlt}
          height={!!logoHeight ? logoHeight : 30}
          width={!!logoWidth ? logoWidth : 30}
        />
      ) : null}
      {wording ? <span>{wording}</span> : null}
    </StyledBranding>
  );
};

const StyledBranding = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-right: 1ch;
  }

  span {
    font-weight: bold;
    margin-top: 2px;
  }
`;

export default NavBranding;
