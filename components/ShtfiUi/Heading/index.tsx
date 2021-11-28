import { HeadingProps } from "components/ShtfiUi/types";
import styled from "styled-components";

const Heading: React.FC<HeadingProps> = ({
  level,
  text,
  align = "center",
  ...rest
}) => {
  switch (level) {
    case 1:
      return (
        <H1 align={align} {...rest}>
          {text}
        </H1>
      );
    case 2:
      return <H2 {...rest}>{text}</H2>;
    case 3:
      return <H3 {...rest}>{text}</H3>;
    case 4:
      return <H4 {...rest}>{text}</H4>;
    case 5:
      return <H5 {...rest}>{text}</H5>;
    case 6:
      return <H6 {...rest}>{text}</H6>;
    default:
      return null;
  }
};

const H1 = styled.h1<{ align?: string }>`
  text-align: ${({ align }) => align};
`;
const H2 = styled.h2<{ align?: string }>`
  text-align: ${({ align }) => align};
`;
const H3 = styled.h3<{ align?: string }>`
  text-align: ${({ align }) => align};
`;
const H4 = styled.h4<{ align?: string }>`
  text-align: ${({ align }) => align};
`;
const H5 = styled.h5<{ align?: string }>`
  text-align: ${({ align }) => align};
`;
const H6 = styled.h6<{ align?: string }>`
  text-align: ${({ align }) => align};
`;

export default Heading;
