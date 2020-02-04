import React from "react";

class SearchBar extends React.Component {
  state = {
    searchValue: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Articles{" "}
          <input
            value={this.state.searchValue}
            type="text"
            onChange={this.handleChange}
          ></input>
        </label>{" "}
        <button type="submit">search</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.searchValue);
    this.setState({ searchValue: "" });
  };
}

export default SearchBar;
