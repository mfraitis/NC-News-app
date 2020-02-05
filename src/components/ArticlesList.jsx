import React from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../api";
import SearchBar from "./SearchBar";


class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <main className="home-list">
          <SearchBar search={this.searchArticles} />
          <ul>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </main>
      );
    }
  }

  searchArticles = searchValue => {
    const { articles } = this.state;
    this.setState({
      articles: articles.filter(article => {
        return article.title.search(searchValue) >= 0;
      })
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const { topic } = this.props;
    fetchArticles(topic).then(articles => {
      this.setState({
        articles: articles,
        isLoading: false
      });
    });
  };
}

export default ArticlesList;
