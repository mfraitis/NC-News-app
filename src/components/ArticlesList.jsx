import React from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../api";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: "",
    order: ""
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <main className="home-list">
          <SearchBar search={this.searchArticles} />
          <SortBy
            setOrder={this.setOrder}
            setSortBy={this.setSortBy}
            id="sort-by"
          />
          <ul>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </main>
      );
    }
  }

  // https: //mf-news.herokuapp.com/api/articles?sort_by=created_at or  comment_count or votes

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      this.getArticles();
    }
    if (prevState.order !== this.state.order) {
      this.getArticles();
    }
  }
  setOrder = event => {
    this.setState({ order: event.target.name });
  };
  setSortBy = event => {
    this.setState({ sortBy: event.target.name });
  };

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
    const { sortBy, order } = this.state;
    fetchArticles(topic, sortBy, order).then(articles => {
      this.setState({
        articles: articles,
        isLoading: false
      });
    });
  };
}

export default ArticlesList;
