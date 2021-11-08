import { NavMobileLinksProps } from "../types";
import BurgerMenuIcon from "./BurgerMenuIcon";
import NavLink from "./NavLink";
import { useState } from "react";

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
      <button
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
      </button>
      <section data-nav="mobile" aria-expanded={open} {...rest}>
        <ul>
          {linkList.map((link, i) => (
            <NavLink
              key={`${link.href}-${link.label.replace(/\ /g, "")}-${i}`}
              {...link}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default NavMobileLinks;
