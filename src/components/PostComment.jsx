import React from "react";
import { postComment } from "../api";
import ErrorPage from "./ErrorPage";

class PostComment extends React.Component {
  state = {
    comment: "",
    err: null
  };

  render() {
    const { comment, err } = this.state;
    const { username } = this.props;
    if (err) {
      return <ErrorPage err={err} />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Post Comment :{" "}
            <input
              value={comment}
              onChange={this.handleChange}
              type="text"
              required
              placeholder={!username ? "please sign in" : null}
            ></input>
          </label>{" "}
          <button disabled={!username} type="submit">
            {" "}
            Submit
          </button>
        </form>
      );
    }
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, addComment, username } = this.props;

    postComment(id, this.state.comment, username)
      .then(comment => {
        addComment(comment);
      })
      .catch(err => this.setState({ err: err.response }));
    this.setState({ comment: "" });
  };
}

export default PostComment;
