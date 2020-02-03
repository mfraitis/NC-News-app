import React from "react";
import { Link } from "@reach/router";
import { Dropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <Button variant="success" >
        <Link to={"/"} className="nav-bar">
          Home
      </Link>
      </Button>
      <Dropdown className="nav-bar">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Topics
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/topics/coding">Coding</Dropdown.Item>
          <Dropdown.Item href="/topics/cooking">Cooking</Dropdown.Item>
          <Dropdown.Item href="/topics/football">Football</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
