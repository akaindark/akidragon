import React from 'react';
import article from './Article.module.css';

const Article = () => {
  return (
    <article className={article.article}>
      <div className={article.image}>
        <img src="" alt=""/>
      </div>
      <div className={article.content}>
        <h3 className={article.title}>New blog article</h3>
        <div className={article.box}>
          <div className={article.author}>Autore</div>
          <div className={article.date}>Date</div>
        </div>
        <p className={article.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
    </article>
  );
}

export default Article;