import React from "react";
import ArticlesList from "./ArticlesList";
import SearchBar from "./SearchBar";

const Topics = ({ topic }) => {
  return (
    <main>
      <SearchBar />
      <h2>{topic}</h2>
      <ArticlesList topic={topic} />
    </main>
  );
};

export default Topics;
