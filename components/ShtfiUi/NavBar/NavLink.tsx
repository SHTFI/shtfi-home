import Link from "next/link";
import Image from "next/image";
import { NavLinkProps } from "../types";
import styled from "styled-components";

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
        <StyledLinkText>{label}</StyledLinkText>
      </a>
    </Link>
  );
};

const StyledLinkText = styled.span`
  margin-left: var(--med-space);
`;

export default NavLink;
