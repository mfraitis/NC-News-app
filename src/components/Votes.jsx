import React from "react";
import { updateVotes } from "../api";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ErrorPage from "./ErrorPage";

class Votes extends React.Component {
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;
    if (err) {
      return <ErrorPage err={err} />;
    }
    return (
      <section>
        <p> votes : {votes + voteChange}</p>
        <button
          disabled={voteChange === 1}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          <ThumbUpIcon />
        </button>
        <button
          disabled={voteChange === -1}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          <ThumbDownIcon />
        </button>
       
      </section>
    );
  }

  handleVote = changeVote => {
    const { patch, id } = this.props;
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + changeVote };
    });
    updateVotes(id, changeVote, patch).catch(err => {
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
