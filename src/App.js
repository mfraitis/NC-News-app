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
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  state = {
    username: null,
    users: [],
    err: null
  };

  render() {
    const { users, username, err } = this.state;

    if (err) {
      return <ErrorPage />;
    } else {
      return (
        <div className="App">
          <NavBar
            handleClick={this.handleClick}
            users={users}
            username={username}
          />

          <nav id="logged-in" disabled variant="success">
            {username ? (
              <React.Fragment> Logged in as : {username}</React.Fragment>
            ) : (
              <br />
            )}
          </nav>

          <Header />
          <Router>
            <Home path="/" />
            <Topics path="/topics/:topic" />
            <Article username={username} path="/article/:id" />
            <ErrorPage default />
          </Router>
        </div>
      );
    }
  }
  handleClick = event => {
    localStorage.setItem("username", event.target.name);
    this.setState({ username: event.target.name });
  };

  componentDidMount() {
    localStorage.getItem("username") &&
      this.setState({ username: localStorage.getItem("username") });
    fetchUsers()
      .then(users => {
        this.setState({ users: users.map(user => user.username) });
      })
      .catch(err => this.setState({ err }));
  }
}

export default App;
