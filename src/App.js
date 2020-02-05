import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Article from "./components/Article";
import { fetchUsers } from "./api";

class App extends React.Component {
  state = {
    username: "",
    users: []
  };

  render() {
    const { users, username } = this.state;
    return (
      <div className="App">
        <NavBar handleClick={this.handleClick} users={users} />
        <Header />
        <Router>
          <Home path="/" />
          <Topics path="/topics/:topic" />
          <Article username={username} path="/article/:id" />
        </Router>
      </div>
    );
  }
  handleClick = event => {
    this.setState({ username: event.target.text });
  };

  componentDidMount() {
    fetchUsers().then(users => {
      this.setState({ users: users.map(user => user.username) });
    });
  }
}

export default App;
