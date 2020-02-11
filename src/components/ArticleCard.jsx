import React from "react";
// import { Card, Button } from "react-bootstrap";
import Votes from "./Votes";
import { Link } from "@reach/router";

const ArticleCard = props => {
  const { article_id, title, votes, author, comment_count } = props.article;

  return (
    <li>
      <section className="articleCards">
        <Link to={`/article/${article_id}`} className="articleCards">
          <h3>{title}</h3>
        </Link>
        <section className="article-card-body">
          <p className="cardInfo">
            <i class="far fa-user"></i> {author}
          </p>
          <p className="cardInfo">
            {comment_count} <i class="far fa-comments"></i>
          </p>

          <Votes id={article_id} votes={votes} patch="articles" />
        </section>
        {/* <Link to={`/article/${article_id}`}>
        <Button variant="success">view article</Button>{" "}
      </Link> */}
      </section>
      {/* <Card>
        <Card.Body>
          <Card.Title></Card.Title>
          <section className="article-card-body">
            <Card.Text>
              Written by: {author}
              <br />
              {comment_count} comments
            </Card.Text>

            <Votes id={article_id} votes={votes} patch="articles" />
          </section>
          <Link to={`/article/${article_id}`}>
            <Button variant="success">view article</Button>{" "}
          </Link>
        </Card.Body>
      </Card> */}
    </li>
  );
};

export default ArticleCard;
