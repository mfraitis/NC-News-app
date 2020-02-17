import React from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../api";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import ErrorPage from "./ErrorPage";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: "",
    order: "",
    limit: 10,
    p: 1,
    err: null
  };

  render() {
    const { articles, isLoading, err } = this.state;
    console.log(articles);
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return (
        <p>
          Loading... <i class="fa fa-spinner fa-spin"></i>
        </p>
      );
    } else {
      return (
        <main className="home-list">
          <SearchBar search={this.searchArticles} />
          <br />
          <SortBy
            setOrder={this.setOrder}
            setSortBy={this.setSortBy}
            id="sort-by"
          />
          <ol>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ol>
          <button
            onClick={() => {
              this.nextPage(-1);
            }}
            disabled={this.state.p === 1}
          >
            previous
          </button>
          {this.state.p}
          <button
            onClick={() => {
              this.nextPage(1);
            }}
            disabled={this.state.articles.length < 10}
          >
            next
          </button>
        </main>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.order !== this.state.order ||
      prevState.p !== this.state.p
    ) {
      this.getArticles();
    }
  }

  setOrder = order => {
    console.log(order);
    this.setState({ order });
  };

  setSortBy = sortBy => {
    this.setState({ sortBy });
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

  nextPage = page => {
    this.setState(currentState => {
      return { p: currentState.p + page };
    });
  };

  getArticles = () => {
    const { topic } = this.props;
    const { sortBy, order, limit, p } = this.state;
    fetchArticles(topic, sortBy, order, limit, p)
      .then(articles => {
        this.setState({
          articles: articles,
          isLoading: false
        });
      })
      .catch(err => {
        return this.setState({ err: err.response });
      });
  };
}

export default ArticlesList;
