import styled from "styled-components";
import { ButtonProps, ElementStyleProps, Colors, Sizes } from "../types";

const Button: React.FC<ButtonProps> = ({
  size = "large",
  hoverColor = "dark-blue",
  color = "blue",
  txtColor = "light",
  hoverTxtColor = "light",
  margin = "medium",
  clickHandler,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      txtColor={txtColor}
      hoverTxtColor={hoverTxtColor}
      hoverColor={hoverColor}
      size={size}
      color={color as Colors}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ElementStyleProps>`
  ${(props) => {
    const { color, margin, size, hoverColor, txtColor, hoverTxtColor } = props;
    return `
    padding: var(--${size}-space);
    background-color: var(--${color});
    color: var(--${txtColor});
    border-radius: calc(var(--large-space) * 2);
    min-width: 14ch;
    transition: 0.3s ease;
    cursor: pointer;
    margin: var(--${margin});
    &:hover {
      background-color: var(--${hoverColor});
      color: var(--${hoverTxtColor});
      box-shadow: var(--shadow);
    }
    `;
  }}
`;

export default Button;
