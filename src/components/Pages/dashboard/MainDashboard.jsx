import React from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function MainDashboard() {
  const items = fakeMenu2;

  return (
    <MainStyled>
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
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 80vh;
  overflow: auto;

  li {
    width: 195px;
    height: 290px;
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    /* box shadow hard */
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 185px;
    height: 155px;
  }
`;
