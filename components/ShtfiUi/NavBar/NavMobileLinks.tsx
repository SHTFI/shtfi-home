import { NavMobileLinksProps } from "../types";
import BurgerMenuIcon from "./BurgerMenuIcon";
import NavLink from "./NavLink";
import { useState } from "react";
import styled from "styled-components";

const NavMobileLinks: React.FC<NavMobileLinksProps> = ({
  mobileIcon,
  mobileIconAlt,
  mobileIconHeight,
  mobileIconWidth,
  linkList,
  burgerMenuCallback,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  // Create our expand handler
  const expandHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    // If a callback was provided execute it after inverting the open state
    if (!!burgerMenuCallback) {
      burgerMenuCallback(e);
    }
  };
  return (
    <>
      <StyledBurgerMenu
        id="shtfi-mobile-expand"
        aria-label="Expand menu"
        aria-controls="shtfi-mobile-nav"
        onClick={expandHandler}
      >
        {mobileIcon ? (
          <BurgerMenuIcon
            iconPath={mobileIcon}
            iconAlt={mobileIconAlt}
            width={mobileIconWidth}
            height={mobileIconHeight}
          />
        ) : (
          <BurgerMenuIcon />
        )}
      </StyledBurgerMenu>
      <StyledMobileSection data-nav="mobile" aria-hidden={!open} {...rest}>
        <StyledUnderlay aria-hidden={!open} onClick={expandHandler} />
        <StyledMobileDrawer aria-hidden={!open}>
          <ul>
            {linkList.map((link, i) => (
              <li key={`${link.href}-${link.label.replace(/\ /g, "")}-${i}`}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </StyledMobileDrawer>
      </StyledMobileSection>
    </>
  );
};

const StyledBurgerMenu = styled.button`
  margin-left: auto;
  cursor: pointer;
`;
const StyledMobileSection = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;

  &[aria-hidden="true"] {
    z-index: -1;
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, max-height 0s ease 0.3s, visibility 0s 0.3s,
      z-index 0s 0.3s;
  }

  &[aria-hidden="false"] {
    max-height: 100%;
    }
  }
`;
const StyledUnderlay = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  opacity: inherit;
  max-height: inherit;
  visibility: inherit;
  z-index: inherit;

  &[aria-hidden="true"] {
    opacity: 0;
    transition: opacity 0.3s ease, max-height 0s 0.3s, visibility 0s 0.3s,
      z-index 0s 0.3s;
  }

  &[aria-hidden="false"] {
    opacity: 1;
    transition: opacity 0.3s ease 0.1s, max-height 0s 0s, visibility 0s 0s,
      z-index 0s 0s;
  }
`;

const StyledMobileDrawer = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(var(--large-space) / 2);
  background-color: #ffffff;
  width: calc(100% - var(--large-space));
  box-shadow: var(--shadow);
  padding: var(--med-space);
  border-radius: var(--radius-large) var(--radius-large) 0 0;
  opacity: inherit;
  visibility: inherit;

  ul {
    padding: 0;
    overflow: auto;

    li {
      list-style: none;
      margin: var(--small-space) 0;

      a {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        padding: var(--small-space) var(--med-space);

        .link_text {
          margin-left: var(--med-space);
        }
      }
    }
  }

  &[aria-hidden="false"] {
    transform: translateY(0);
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s,
      z-index 0s;
  }

  &[aria-hidden="true"] {
    z-index: -1;
    transform: translateY(100%);
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s 0.3s,
      z-index 0s 0.3s;
  }
`;
export default NavMobileLinks;
