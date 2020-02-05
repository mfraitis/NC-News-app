import React from "react";
import Votes from "./Votes";
import PostComment from "./PostComment";

const ArticleBody = props => {
  const {
    article_id,
    title,
    body,
    votes,
    topic,
    author,
    created_at,
    comment_count
  } = props.article;
  const { addComment, username } = props;
  return (
    <section id="article-body">
      <br />
      <p className="article-p">{title}</p>
      <p className="article-p">{topic}</p>
      <p className="article-p">{body}</p>
      <p className="article-p">written by : {author}</p>
      <p className="article-p">{created_at}</p>
      <Votes id={article_id} votes={votes} />
      <br />
      <p className="article-p">{comment_count} comments</p>
      <PostComment
        username={username}
        addComment={addComment}
        id={article_id}
      />
    </section>
  );
};

export default ArticleBody;
