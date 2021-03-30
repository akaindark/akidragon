import React from 'react';
import lang from './Lang.module.css';

const Lang = () => {
  return (
    <div className="box">
      <a href="#" className={lang.lang}>Ita</a>
      <a href="#" className={lang.lang}>Eng</a>
    </div>
  );
}

export default Lang;