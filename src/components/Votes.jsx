import React from "react";
import { updateVotes } from "../api";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

class Votes extends React.Component {
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;

    return (
      <section>
        <button
          disabled={voteChange === 1}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          <ThumbUpIcon />
        </button>
        <p> votes : {votes + voteChange}</p>
        <button
          disabled={voteChange === -1}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          <ThumbDownIcon />
        </button>
        {err && <p>error</p>}
      </section>
    );
  }

  handleVote = changeVote => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + changeVote };
    });
    updateVotes(this.props.id, changeVote).catch(err => {
      return this.setState(currentState => {
        return {
          err: err.response,
          voteChange: currentState.voteChange - changeVote
        };
      });
    });
  };
}

export default Votes;
