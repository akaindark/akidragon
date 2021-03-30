import React from 'react';
import menu from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={menu.menu}>
      <ul className={menu.list}>
        <li className={menu.item}>
          <a href="#" className={menu.link}>Il nostro universo</a>
        </li>
        <li className={menu.item}>
          <a href="#" className={menu.link}>Community</a>
        </li>
        <li className={menu.item}>
          <a href="#" className={menu.link}>Il Brand</a>
        </li>
        <li className={menu.item}>
          <a href="#" className={menu.link}>Contatti</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;