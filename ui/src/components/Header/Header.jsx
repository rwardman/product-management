import React from "react";

import PropTypes from "prop-types";
import Logo from "../Icons/Logo";

import * as Styled from "./Header.styles.js";

const Header = ({ title }) => {
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
      {title && <h1>{title}</h1>}
    </Styled.Container>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
