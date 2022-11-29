import styled from "styled-components";
import { theme } from "../themes";

export default function Input({
  value,
  onChange,
  Icon,
  className,
  ...restProps
}) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}

      <input value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  .icon {
    font-size: 22px;
    margin: 0 10px 0 0;
    color: #93a2b1;
  }

  input {
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 18px;
    color: ${theme.colors.dark};;
    width: 100%;
    transition: all 0.17s ease-in-out;
    border-radius: 3px;

    &::placeholder {
      color: ${theme.colors.greySemiDark};
      font-size: 15px;
    }

    &:focus {
      outline: 1.7px solid ${theme.colors.primary};
    }
  }
`;
