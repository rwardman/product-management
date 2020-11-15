import React from "react";

import PropTypes from "prop-types";
import * as Styled from "./ProductCard.styles";

const ProductCard = ({
  id,
  name,
  description,
  category,
  creationDate,
  updateDate,
  lastPurchasedDate,
}) => {
  return (
    <Styled.Container>
      <Styled.TopContainer>
        <Styled.Title>{name}</Styled.Title>
        <div>
          <Styled.SubTitle> Id: </Styled.SubTitle>
          {id}
        </div>
      </Styled.TopContainer>

      <Styled.BottomContainer>
        <Styled.Paragraph>{description}</Styled.Paragraph>
        <Styled.InfoContainer>
          <Styled.SubTitle>Category: </Styled.SubTitle>
          {category}
        </Styled.InfoContainer>
        <Styled.InfoContainer>
          <Styled.SubTitle>Created: </Styled.SubTitle>
          {creationDate}
        </Styled.InfoContainer>
        <Styled.InfoContainer>
          <Styled.SubTitle>Updated: </Styled.SubTitle>
          {updateDate}
        </Styled.InfoContainer>
        <Styled.InfoContainer>
          <Styled.SubTitle>Last Purchased: </Styled.SubTitle>
          {lastPurchasedDate}
        </Styled.InfoContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
};
