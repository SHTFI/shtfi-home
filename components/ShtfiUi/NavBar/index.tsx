import { useEffect, useState } from "react";
import { NavBarProps } from "../types";
import NavBranding from "./NavBranding";
import NavDesktopLinks from "./NavDesktopLinks";
import NavMobileLinks from "./NavMobileLinks";
import styled from "styled-components";
const NavBar: React.FC<NavBarProps> = ({
  mobileIcon,
  mobileIconAlt,
  mobileIconWidth,
  mobileIconHeight,
  burgerMenuCallback,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  brandWording,
  linkList,
  ...rest
}) => {
  // Ensure component is only rendered in the client
  const [isMobile, setIsMobile] = useState<boolean>(true);
  // Set dataset of the nav to decide which nav to show
  if (typeof window !== "undefined") {
    useEffect(() => {
      setIsMobile(window && window.innerWidth <= 500 ? true : false);
    }, [window.innerHeight]);
  }
  return (
    <StyledWrapper {...rest} data-mob={isMobile}>
      <StyledNav id="shtfi-mobile-nav-bar">
        {!!logo || !!brandWording ? (
          <NavBranding
            logo={logo}
            logoAlt={logoAlt}
            logoWidth={logoWidth}
            logoHeight={logoHeight}
            wording={brandWording}
          />
        ) : null}
        {isMobile ? (
          <NavMobileLinks
            linkList={linkList}
            mobileIcon={mobileIcon}
            mobileIconAlt={mobileIconAlt}
            mobileIconHeight={mobileIconHeight}
            mobileIconWidth={mobileIconWidth}
            burgerMenuCallback={burgerMenuCallback}
          />
        ) : (
          <NavDesktopLinks linkList={linkList} />
        )}
      </StyledNav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  background-color: var(--light-blue);
  z-index: 999;
  position: fixed;
  overflow: hidden;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: var(--large-space);
`;
export default NavBar;
