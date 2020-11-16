import styled from "styled-components";

const MainContainer = styled.div`
  margin: 30px;
`;

const ProductCardsContiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
`;

const SortByContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 414px) {
    flex-direction: row;
  }
`;

export { MainContainer, ProductCardsContiner, SortByContainer };
