import styled from "styled-components";
import { FaPeopleCarry } from "react-icons/fa";
import { TextIconProps } from "../types";
const TextIcon: React.FC<TextIconProps> = ({
  heading,
  copy,
  icon,
  ...rest
}) => {
  return (
    <StyledWrapper {...rest}>
      <FaPeopleCarry size={50} />
      <StyledHeading>{heading}</StyledHeading>
      <StyledCopy>{copy}</StyledCopy>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  padding: var(--large-space);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 380px;
  width: auto;
`;
const StyledHeading = styled.h4`
  margin: var(--large-space) 0 0 0;
`;
const StyledCopy = styled.p`
  margin: var(--large-space) 0 0 0;
  max-width: 90%;
`;

export default TextIcon;
