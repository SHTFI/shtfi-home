import styled from "styled-components";
import { InputProps } from "components/ShtfiUi/types";
import { Button } from "..";
import { FaSearch } from "react-icons/fa";
const Input: React.FC<InputProps> = ({ button, ...rest }) => {
  return (
    <StyledInputWrapper>
      <StyledInput {...rest} />
      {button && (
        <StyledSearchButton>
          <FaSearch size={20} />
        </StyledSearchButton>
      )}
    </StyledInputWrapper>
  );
};
const StyledInputWrapper = styled.div`
  border: 3px solid var(--blue);
  border-radius: calc(var(--radius-large) * 2);
  background-color: var(--light);
  color: var(--dark);
  display: flex;
  max-width: 24ch;
  transition: 0.3s ease;
  margin: auto;
  &:focus-within {
    border-color: var(--dark-blue);
    > button {
      background-color: var(--dark-blue);
    }
  }
`;

const StyledInput = styled.input`
  padding: var(--large-space) var(--large-space);
  appearance: none;
  width: 100%;
  border-radius: calc(var(--radius-large) * 2);
  border: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const StyledSearchButton = styled(Button)`
  border-radius: 0 calc(var(--radius-large) * 2) calc(var(--radius-large) * 2) 0;
  min-width: 8ch;
`;
export default Input;
