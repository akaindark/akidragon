import React from 'react';
import social from './SocialLink.module.css';

const SocialLink = () => {
  return (
    <ul className={social.list}>
      <li className={social.item}>
        <a className={social.link} href="#">F</a>
      </li>
      <li className={social.item}>
        <a className={social.link} href="#">I</a>
      </li>
      <li className={social.item}>
        <a className={social.link} href="#">Y</a>
      </li>
      <li className={social.item}>
        <a className={social.link} href="#">T</a>
      </li>
    </ul>
  );
}

export default SocialLink;