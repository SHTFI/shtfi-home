import { Colors, CoinDistribution } from "types";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: string;
  logo?: string;
  logoAlt?: string;
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
