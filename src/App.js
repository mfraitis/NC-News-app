import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Router>
        <Home path="/" />
        <Topics path="/topics/:topic" />
        <Article path="/article/:id" />
      </Router>
    </div>
  );
}

export default App;
