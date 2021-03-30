import React from 'react';
import header from './Header.module.css';
import Menu from "./Menu/Menu";
import Logo from "../Logo/Logo";

const Header = () => {
  return(
    <header className="header.header">
      <Logo/>
      <Menu/>
    </header>
  );
}

export default Header;
