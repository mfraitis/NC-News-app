import React from "react";
import ArticlesList from "./ArticlesList";
// import TopicsList from "./TopicsList";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <ArticlesList />
      </main>
    );
  }
}

export default Home;
