import { NavDesktopLinksProps } from "../types";
import NavLink from "./NavLink";

const NavDesktopLinks: React.FC<NavDesktopLinksProps> = ({ linkList }) => {
  return (
    <ul data-nav="desktop">
      {linkList.map((link, i) => (
        <NavLink
          key={`desktop-${link.href}-${link.label.replace(/\ /g, "")}-${i}`}
          {...link}
        />
      ))}
    </ul>
  );
};

export default NavDesktopLinks;
