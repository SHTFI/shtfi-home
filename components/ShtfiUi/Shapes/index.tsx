import { ShapesProps } from "../types";
import styled from "styled-components";

const Shapes: React.FC<ShapesProps> = ({
  shape = "squares",
  size = "small",
  background = true,
  ...rest
}) => {
  return (
    <StyledWrapper data-bg={background} data-size={size} {...rest}>
      <StyledShape data-shape={shape}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StyledShape>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 90%;
  height: 90%;
  min-width: 250px;
  min-height: 250px;
  max-width: 300px;
  max-height: 300px;
  margin: auto;
  opacity: 0.1;

  &[data-bg="true"] {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &[data-bg="false"] {
    position: relative;
    opacity: 1;
  }

  &[data-size="tiny"] {
    min-width: 50px;
    min-height: 50px;
    max-width: 100px;
    max-height: 100px;

    [data-shape="squares"] > span {
      border-radius: var(--large-space);

      &:nth-of-type(2),
      &:nth-of-type(3),
      &:last-of-type {
        border-radius: var(--med-space);
      }
    }
  }

  &[data-size="small"] {
    min-width: 100px;
    min-height: 100px;
    max-width: 200px;
    max-height: 200px;
  }

  &[data-size="large"] {
    max-width: 500px;
    max-height: 500px;
  }
`;

const StyledShape = styled.div`
  &[data-shape="squares"] {
    width: 100%;
    height: 100%;

    > span {
      position: absolute;
      border-radius: calc(var(--radius-large) * 2);
      content: "";
    }

    > span:first-of-type {
      top: 0;
      left: 0;
      width: 90%;
      height: 90%;
      background-color: var(--dark-blue);
    }
    > span:nth-of-type(2) {
      right: 0;
      bottom: 0;
      width: 50%;
      height: 50%;
      background-color: var(--blue);
    }
    > span:nth-of-type(3) {
      top: 50%;
      left: 50%;
      transform: translate(10%, -90%);
      width: 40%;
      height: 40%;
      background-color: var(--dark-brown);
      border-radius: var(--radius-large);
    }
    > span:nth-of-type(4) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
      height: 30%;
      background-color: var(--brown);
      border-radius: var(--radius-large);
    }
  }
`;
export default Shapes;
