import { FooterProps } from "../types";

const Footer: React.FC<FooterProps> = ({ children, ...rest }) => {
  return <footer {...rest}>{children}</footer>;
};

export default Footer;
