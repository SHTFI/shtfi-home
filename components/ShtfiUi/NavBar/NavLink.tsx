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
  onClick,
  ...rest
}) => {
  return (
    <Link href={href} {...rest}>
      <StyledNavLink title={title} onClick={onClick}>
        {!!icon ? (
          <Image src={icon} alt={iconAlt} width={25} height={25} />
        ) : null}
        <StyledLinkText>{label}</StyledLinkText>
      </StyledNavLink>
    </Link>
  );
};

const StyledLinkText = styled.span`
  margin-left: var(--med-space);
`;

const StyledNavLink = styled.a`
  display: inline-flex;
  margin: 0 var(--med-space);
  transition: 0.3s ease;
  cursor: pointer;

  > div {
    opacity: 0.9;
  }

  &:hover {
    background-color: var(--dark-blue);
    color: var(--light);
  }
`;
export default NavLink;
