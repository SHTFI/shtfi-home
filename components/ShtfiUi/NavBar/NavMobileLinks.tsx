import { NavMobileLinksProps } from "../types";
import BurgerMenuIcon from "./BurgerMenuIcon";
import NavLink from "./NavLink";
import { useState } from "react";
import style from "./NavBar.module.scss";

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
        className={style.burger_menu}
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
      <section
        className={style.mobile_section}
        data-nav="mobile"
        aria-hidden={!open}
        {...rest}
      >
        <span className={style.underlay} onClick={expandHandler}></span>
        <div className={style.mobile_drawer}>
          <ul>
            {linkList.map((link, i) => (
              <li key={`${link.href}-${link.label.replace(/\ /g, "")}-${i}`}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavMobileLinks;
