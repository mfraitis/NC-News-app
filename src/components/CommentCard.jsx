import React from "react";
import Votes from "./Votes";

const CommentCard = props => {
  const { comment, deleteComment, username } = props;

  return (
    <React.Fragment>
      <br />
      <li className="comment-card">{comment.body}</li>
      <section id="delete-button">
        {username ? (
          <Votes
            id={comment.comment_id}
            votes={comment.votes}
            patch="comments"
          />
        ) : (
          <button disabled={!username}>Log in to vote</button>
        )}
        {username === comment.author ? (
          <button
            id="delete-me"
            onClick={() => {
              deleteComment(comment.comment_id);
            }}
            value={comment.comment_id}
          >
            <i class="fas fa-trash"></i>
          </button>
        ) : null}
      </section>
      <br />
    </React.Fragment>
  );
};

export default CommentCard;
