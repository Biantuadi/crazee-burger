import styled from "styled-components";
import Items from "./Items";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { useState } from "react";
import { theme } from "../../../themes";

export default function SectionMenu() {
  const [products, setProducts] = useState(fakeMenu2);
  return (
    <SectionMenuStyled>
      <ul>
        {products.map((item) => (
          <Items
            title={item.title}
            imageSource={item.imageSource}
            price={item.price}
            id={item.id}
          />
        ))}
      </ul>
    </SectionMenuStyled>
  );
}

const SectionMenuStyled = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
    justify-items: center;
    padding: 10px;
    margin: 10px;
    margin-top: 0;
    height: 80vh;
    overflow: scroll;
    overflow-x: hidden;

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
  }
`;
