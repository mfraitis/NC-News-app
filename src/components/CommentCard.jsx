import React from "react";
import Votes from "./Votes";

const CommentCard = props => {
  const { comment, deleteComment, username } = props;

  return (
    <React.Fragment>
      <br />
      <li className="comment-card">{comment.body}</li>
      {username === comment.author ? (
        <button onClick={deleteComment} value={comment.comment_id}>
          delete
        </button>
      ) : null}
      {username ? (
        <Votes id={comment.comment_id} votes={comment.votes} patch="comments" />
      ) : (
        <button disabled={!username}>Log in to vote</button>
      )}
    </React.Fragment>
  );
};

export default CommentCard;
