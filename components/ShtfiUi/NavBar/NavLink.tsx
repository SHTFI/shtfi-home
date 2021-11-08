import Link from "next/link";
import Image from "next/image";
import { NavLinkProps } from "../types";

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
        {!!icon ? <Image src={icon} alt={iconAlt} layout="fill" /> : null}
        <span>{label}</span>
      </a>
    </Link>
  );
};

export default NavLink;
