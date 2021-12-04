import styled from "styled-components";

import { ButtonProps, ElementStyleProps, Colors, Sizes } from "../types";

const Button: React.FC<ButtonProps> = ({
  size = "large",
  hoverColor = "dark-blue",
  color = "blue",
  txtColor = "light",
  hoverTxtColor = "light",
  margin = "medium",
  link = false,
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
      link={link}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ link: boolean } & ElementStyleProps>`
  ${(props) => {
    const { color, margin, size, hoverColor, txtColor, hoverTxtColor, link } =
      props;
    return !!link
      ? `appearance: none;
      background: transparent;
      border: none;
      text-decoration: underline;
      cursor: pointer;
      color: inherit;
      padding: 0;
      transition: 0.3s ease;
      
      &:hover {
        background-color: var(--dark-blue);
        color: var(--light);
      }
      `
      : `padding: var(--${size}-space);
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

    &[disabled] {
      opacity: 0.5;
    }`;
  }}
`;

export default Button;
