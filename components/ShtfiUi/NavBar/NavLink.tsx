import Link from "next/link";
import Image from "next/image";
import { NavLinkProps } from "../types";
import style from "./NavBar.module.scss";
const NavLink: React.FC<NavLinkProps> = ({
  href,
  title,
  icon,
  label,
  iconAlt,
}) => {
  return (
    <Link href={href}>
      <a title={title}>
        {!!icon ? (
          <Image src={icon} alt={iconAlt} width={25} height={25} />
        ) : null}
        <span className={style.link_text}>{label}</span>
      </a>
    </Link>
  );
};

export default NavLink;
