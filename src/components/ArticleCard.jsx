import React from "react";
import { Card, Button } from "react-bootstrap";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <li>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            posted by: {article.author}, votes:{article.votes}, comments:
            {article.comment_count}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </li>
  );
};

export default ArticleCard;
