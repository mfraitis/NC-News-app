import React from "react";
import Votes from "./Votes";

const ArticleBody = props => {
  const { article_id, title, body, votes, author, created_at } = props.article;
  return (
    <section id="article-body">
      <br />
      <h3>{title}</h3>
      <br />
      <p id="articleBody">{body}</p>
      <section id="article-info">
        <p id="article-p-info">
          written by : {author} <br /> posted on:
          {new Date(created_at).toLocaleString()}
        </p>
        <Votes
          className="article-page-votes"
          id={article_id}
          votes={votes}
          patch="articles"
        />
      </section>
      <br />
    </section>
  );
};

export default ArticleBody;
