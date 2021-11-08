import { FooterTileProps } from "../types";

const FooterTile: React.FC<FooterTileProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default FooterTile;
