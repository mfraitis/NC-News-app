import React from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { fetchCommentsById, removeComment } from "../api";
import ErrorPage from "./ErrorPage";

class CommentsList extends React.Component {
  state = {
    comments: [],
    err: null
  };

  render() {
    const { username, article_id } = this.props;
    const { comments, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    }
    return (
      <section>
        <br />
        <PostComment
          username={username}
          addComment={this.addComment}
          id={article_id}
        />

        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                username={username}
                key={comment.comment_id}
                comment={comment}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
      </section>
    );
  }
  deleteComment = event => {
    const comment_id = event.target.value;

    removeComment(comment_id)
      .then(() => {
        this.setState(currentState => {
          return {
            comments: currentState.comments.filter(comment => {
              return comment.comment_id !== +comment_id;
            })
          };
        });
      })
      .catch(err => this.setState({ err: err.response }));
  };

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  getComments = () => {
    const { article_id } = this.props;
    fetchCommentsById(article_id)
      .then(comments => {
        this.setState({ comments: comments });
      })
      .catch(err => this.setState({ err: err.response }));
  };

  componentDidMount() {
    this.getComments();
  }
}

export default CommentsList;
