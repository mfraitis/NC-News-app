import React from "react";
import ArticlesList from "./ArticlesList";

const Topics = ({ topic }) => {
  return (
    <main>
      <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
      <ArticlesList topic={topic} />
    </main>
  );
};

export default Topics;
