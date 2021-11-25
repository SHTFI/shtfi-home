import { LinkProps } from "next/link";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export interface NavBarProps extends React.HTMLAttributesHTML<HTMLDivElement> {
  mobileIcon?: string;
  mobileIconAlt?: string;
  mobileIconWidth?: number;
  mobileIconHeight?: number;
  burgerMenuCallback?: MouseEventHandler;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  brandWording?: string;
  linkList: NavLinkType[];
}

export type NavLinkType = {
  href: string;
  title: string;
  label: string;
  icon?: string;
  iconAlt?: string;
};

export interface NavLinkProps extends LinkProps, NavLinkType {}

export interface NavBrandingProps {
  logo?: string;
  logoAlt?: string;
  logoWidth?;
  logoHeight?;
  wording?: string;
}

export interface NavDesktopLinksProps
  extends React.HTMLAttributes<HTMLUListElement> {
  linkList: NavLinkType[];
}

export interface NavMobileLinksProps
  extends React.HTMLAttributes<HTMLDivElement> {
  burgerMenuCallback?: React.MouseEventHandler;
  mobileIcon?: string;
  mobileIconAlt?: string;
  mobileIconWidth?: number;
  mobileIconHeight?: number;
  linkList: NavLinkType[];
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface FooterTileProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  toggleCallback?: React.MouseEventHandler<HTMLButtonElement>;
  buttonProps?: ButtonProps;
  buttonLabel?: string;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  underlayProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export interface ShapesProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: string;
  background?: boolean;
}
