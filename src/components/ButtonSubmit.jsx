import styled from "styled-components";
import { theme } from "../themes";

export default function ButtonSubmit({ Icon, label, ...restProps }) {
  return (
    <ButtonSubmitStyled {...restProps}>
      {label && label}
      {Icon && Icon}
    </ButtonSubmitStyled>
  );
}

const ButtonSubmitStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  border-radius: 5px;
  font-weight: 600;
  width: 100%;
  padding: 18px 24px;
  cursor: pointer;
  transition: all 0.17s ease-in-out;
  color: ${theme.colors.white};
  border: none;
  outline: none;
  font-size: 15px;

 

  &:hover {
    background-color: white;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    

    
  }
`;
