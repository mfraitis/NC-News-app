import React from "react";
import { fetchArticle, fetchCommentsById } from "../api";
import ArticleBody from "./ArticleBody";
import CommentsList from "./CommentsList";

class Article extends React.Component {
  state = {
    article: [],
    isLoading: true,
    comments: []
  };

  render() {
    console.log(this.props.id);
    const { article, isLoading, comments } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else
      return (
        <main>
          <ArticleBody article={article} />
          <CommentsList comments={comments} />
        </main>
      );
  }

  componentDidMount() {
    this.getArticle();
    this.getComments();
  }
  getArticle = () => {
    const { id } = this.props;
    fetchArticle(id).then(article => {
      this.setState({ article: article, isLoading: false });
    });
  };
  getComments = () => {
    const { id } = this.props;
    fetchCommentsById(id).then(comments => {
      this.setState({ comments: comments });
    });
  };
}

export default Article;
