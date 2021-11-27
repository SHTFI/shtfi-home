import { CardProps } from "components/Base/types";
import styled from "styled-components";

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  box-shadow: var(--shadow);
  border-radius: var(--radius-large);
  max-width: 300px;
  max-height: 600px;
  min-width: 200px;
  width: 95%;
  height: calc(80 * var(--vh));
  padding: var(--med-space);
  position: relative;
  margin: auto;
`;
export default Card;
