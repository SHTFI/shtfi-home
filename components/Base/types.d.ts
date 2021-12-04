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
