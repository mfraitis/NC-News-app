import React from "react";
import { Card } from "react-bootstrap";
import Votes from "./Votes";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const {
    article_id,
    title,
    votes,
    // topic,
    author,
    // created_at,
    comment_count
  } = props.article;

  return (
    <li>
      <br />

      <Card>
        <Link to={`/article/${article_id}`}>
          {" "}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              posted by: {author}, comments:
              {comment_count}
            </Card.Text>
          </Card.Body>{" "}
        </Link>
        <Votes id={article_id} votes={votes} />
      </Card>
    </li>
  );
};

export default ArticleCard;
