const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <footer {...rest}>{children}</footer>;
};

export default Footer;
