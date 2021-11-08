import { HeadingProps } from "components/ShtfiUi/types";

const Heading: React.FC<HeadingProps> = ({ level, text, ...rest }) => {
  const DynamicTag = `h${level}` as const;
  return <DynamicTag {...rest}>{text}</DynamicTag>;
};

export default Heading;
