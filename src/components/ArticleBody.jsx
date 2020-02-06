import React from "react";
import Votes from "./Votes";

const ArticleBody = props => {
  const {
    article_id,
    title,
    body,
    votes,
    topic,
    author,
    created_at
  } = props.article;
  return (
    <section id="article-body">
      <br />
      <p className="article-p">{title}</p>
      <p className="article-p">{topic}</p>
      <p className="article-p">{body}</p>
      <p className="article-p">written by : {author}</p>
      <p className="article-p">{created_at}</p>
      <Votes id={article_id} votes={votes} patch="articles" />
      <br />
    </section>
  );
};

export default ArticleBody;
