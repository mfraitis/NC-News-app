import React from "react";
import SearchBar from "./SearchBar";
import ArticlesList from "./ArticlesList";
import TopicsList from "./TopicsList";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <SearchBar />
        <ArticlesList />
        <TopicsList />
      </main>
    );
  }
}

export default Home;
