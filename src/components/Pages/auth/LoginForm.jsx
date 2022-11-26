import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../themes";

export default function LoginForm() {
  // 1. State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // 2. comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/dashboard/${inputValue}`);
  };

  // 3. affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr/>
      <h2>Connectez-vous</h2>

      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          type="name"
          required
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <input type="submit" value="Accéder à mon espace" />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: 500px;


  hr {
    border: 1.5px solid ${theme.colors.primary};
    /* width: 500px; */
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    font-size: 36px;
  }

  input[type="submit"] {
    margin-top: 25px;
  }

  .input-with-icon {
    background-color: ${theme.colors.white};
    border-radius: 5px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    margin: 20px 0;

    .icon {
      font-size: 20px;
      margin: 0 13px 0 0;
      color: #93a2b1;
    }

    input {
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 18px;
      color: #17161a;
      width: 100%;
      transition: all 0.17s ease-in-out;
      border-radius: 3px;

      &::placeholder {
        color: #93a2b1;
      }

      &:focus {
        outline: 1.7px solid ${theme.colors.primary};
      }
    }
  }
`;
