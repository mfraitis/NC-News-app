import React from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../api";

class ArticlesList extends React.Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    // console.log(articles);
    return (
      <div className="list">
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        <p className="test"></p>
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const { topic } = this.props;
    fetchArticles(topic).then(articles => {
      this.setState({ articles: articles });
    });
  };
}

export default ArticlesList;
