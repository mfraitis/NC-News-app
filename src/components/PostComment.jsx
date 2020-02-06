import React from "react";
import { postComment } from "../api";

class PostComment extends React.Component {
  state = {
    comment: ""
  };

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          comment :{" "}
          <input
            value={comment}
            onChange={this.handleChange}
            type="text"
          ></input>
        </label>
        <br />
        <button type="submit"> post my comment</button>
      </form>
    );
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
      .catch(err => console.log(err));
    this.setState({ comment: "" });
  };
}

export default PostComment;
