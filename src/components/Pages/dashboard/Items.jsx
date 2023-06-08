import React from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { theme } from "../../../themes";

export default function Items() {
  const items = fakeMenu2;

  return (
    <ItemsStyled>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.imageSource} alt={item.title} />
          <h3>{item.title}</h3>
          <div className="price_button">
            <span>{item.price}</span>
            <button>Buy</button>
          </div>
        </li>
      ))}
    </ItemsStyled>
  );
}

const ItemsStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 10px;
    margin: 10px;
    margin-top: 0;
    height: 80vh;
    overflow: auto;
    overflow-x: hidden;

    /* scroll bar */

    ::-webkit-scrollbar {
      width: 15px;
    }
    
    
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${theme.colors.greyDark};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }




    @media (max-width: 1294px) and (min-width: 891px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1091px) and (min-width: 630px) {
      grid-template-columns: repeat(2, 1fr);
      height: 87vh;
    }

    @media (max-width: 768px) {
      height: 100%;
    }

    @media (max-width: 630px) and (min-width: 0px) {
      grid-template-columns: repeat(1, 1fr);
      height: 100%;
    }

    li {
      width: 195px;
      height: 290px;
      background-color: #fff;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      img {
        width: 130px;
        height: 120px;
      }

      h3 {
        font-size: 30px;
      }
    }
`;
