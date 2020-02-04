import React from "react";
import ArticlesList from "./ArticlesList";

const Topics = ({ topic }) => {
  return (
    <main>
      <h2>{topic}</h2>
      <ArticlesList topic={topic} />
    </main>
  );
};

export default Topics;
