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
    const { article, isLoading, comments } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else
      return (
        <main>
          <ArticleBody
            username={this.props.username}
            addComment={this.addComment}
            article={article}
          />
          <CommentsList comments={comments} />
        </main>
      );
  }

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

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
