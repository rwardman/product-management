import React from "react";

import Logo from "../Icons/Logo";

import * as Styled from "./Header.styles.js";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      <h1>Product Management</h1>
    </Styled.Container>
  );
};

export default Header;
