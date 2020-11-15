import React from "react";

import Logo from "../Icons/Logo";
import SearchBar from "../SearchBar/SearchBar";

import * as Styled from "./Header.styles.js";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      <SearchBar />
    </Styled.Container>
  );
};

export default Header;
