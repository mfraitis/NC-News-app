import React from "react";
import { fetchArticle } from "../api";
import ArticleBody from "./ArticleBody";
import CommentsList from "./CommentsList";

class Article extends React.Component {
  state = {
    article: [],
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else
      return (
        <main>
          <ArticleBody article={article} />
          <CommentsList
            // comments={comments}
            username={this.props.username}
            // addComment={this.addComment}
            article_id={article.article_id}
          />
        </main>
      );
  }

  // addComment = newComment => {
  //   this.setState(currentState => {
  //     return { comments: [newComment, ...currentState.comments] };
  //   });
  // };
  // getComments = () => {
  //   const { id } = this.props;
  //   fetchCommentsById(id).then(comments => {
  //     this.setState({ comments: comments });
  //   });
  // };

  componentDidMount() {
    this.getArticle();
    // this.getComments();
  }
  getArticle = () => {
    const { id } = this.props;
    fetchArticle(id).then(article => {
      this.setState({ article: article, isLoading: false });
    });
  };
}

export default Article;
