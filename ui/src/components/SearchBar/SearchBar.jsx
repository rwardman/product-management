import React from "react";

import * as Styled from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <Styled.Container>
      <Styled.SearchForm>
        <Styled.SearchInput type="search" name="search" />
        <Styled.SearchButton>Search</Styled.SearchButton>
      </Styled.SearchForm>
    </Styled.Container>
  );
};

export default SearchBar;
