import React from 'react';
import header from './Header.module.css';
import Menu from "./Menu/Menu";
import Logo from "../Logo/Logo";
import Lang from "./Lang/Lang";

const Header = () => {
  return(
    <header className={header.header}>
      <Logo />
      <Menu />
      <Lang />
    </header>
  );
}

export default Header;
