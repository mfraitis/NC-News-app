import React from "react";
import { fetchArticle } from "../api";
import ArticleBody from "./ArticleBody";
import CommentsList from "./CommentsList";
import ErrorPage from "./ErrorPage";

class Article extends React.Component {
  state = {
    article: [],
    isLoading: true,
    showComments: false,
    err: null
  };

  render() {
    const { article, isLoading, showComments, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    } else if (isLoading) {
      return <p>Loading...</p>;
    } else
      return (
        <main>
          <h2>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </h2>
          <ArticleBody article={article} />
          <button onClick={this.viewComments}>
            {showComments ? "Hide" : "View"} comments
          </button>
          <br />
          {showComments ? (
            <CommentsList
              username={this.props.username}
              article_id={article.article_id}
            />
          ) : null}
        </main>
      );
  }

  viewComments = () => {
    this.setState(currentState => {
      return { showComments: !currentState.showComments };
    });
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const { id } = this.props;
    fetchArticle(id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(err => this.setState({ err: err.response }));
  };
}

export default Article;
