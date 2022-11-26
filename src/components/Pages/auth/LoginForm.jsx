import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
      <hr />
      <h2>Connectez-vous</h2>

      <div className="input-with-icon">
        <i className="fas fa-user icon"></i>
        <input
          type="name"
          required
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <button type="submit" className="button-with-icon">
        Accéder à mon espace
        <i className="fas fa-chevron-right icon"></i>
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  padding: 2.5rem 2rem;
  text-align: center;
  /* max-width: 500px; */

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

  .input-with-icon {
    background-color: ${theme.colors.white};
    border-radius: 5px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    margin: 20px 0;

    .icon {
      font-size: 15px;
      margin: 0 13px 0 0;
      color: #93a2b1;
      border: 1px solid #93a2b1;
      border-radius: 50%;
      padding: 5px;
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

  .button-with-icon {
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
    font-size: 18px;

    
    .icon {
      font-size: 20px;
      color: white;
      margin: 0 0 0 13px;
    }

      &:hover {
        background-color: white;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
  
        .icon {
          color: ${theme.colors.primary};
        }
      }
    
    
  }
`;
