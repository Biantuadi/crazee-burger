import React from "react";
import styled from "styled-components";

export default function Items({ title, imageSource, price, id }) {
  return (
    <>
      <ItemStyled key={id}>
        <div className="container_img">
          <img src={imageSource} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="price_button">
          <span>{price}</span>
          <button>Buy</button>
        </div>
      </ItemStyled>
    </>
  );
}

const ItemStyled = styled.li`
  width: 240px;
  height: 330px;
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
`;
