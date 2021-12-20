import { LinkProps } from "next/link";
// Re add colors here in case ui is used out of the scope of this project
type Colors =
  | "light-blue"
  | "blue"
  | "dark-blue"
  | "brown"
  | "dark-brown"
  | "light"
  | "dark";

// Re add sizes here in case ui is used out of the scope of this project
type Sizes = "tiny" | "small" | "med" | "large" | "full-width";

export interface ElementStyleProps {
  color?: Colors;
  txtColor?: Colors;
  hoverColor?: Colors;
  hoverTxtColor?: Colors;
  size?: Sizes;
  margin?: Sizes;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ElementStyleProps {
  label?: string;
  link?: boolean;
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

export interface NavLinkType extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  label: string;
  icon?: string;
  iconAlt?: string;
}

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
  align?: "center" | "left" | "right";
}

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface FooterTileProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  toggleCallback?: React.MouseEventHandler<HTMLButtonElement>;
  buttonProps?: ButtonProps;
  buttonLabel?: string;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  underlayProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export interface ShapesProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: string;
  background?: boolean;
  size?: "tiny" | "small" | "medium" | "large";
}

export interface TextIconProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  copy: string;
  icon: string;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  button?: boolean;
}

import { Colors, CoinDistribution } from "types";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: string;
  logo?: string;
  logoAlt?: string;
  socialIcons?: boolean;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  margin?: string;
  maxWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  minWidth?: string;
  background?: string;
}

export interface TokenomicsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CoinDistribution {
  color?: Colors;
  showPercent?: (keyof CoinDistribution)[];
  showLarge?: (keyof CoinDistribution)[];
}

export interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center" | "right";
}

interface MetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  name?: string;
  card?: string;
  twitterSite?: string;
  twitterCreator?: string;
  robots?: string;
  favicon?: string;
}
