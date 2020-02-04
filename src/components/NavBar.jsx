import React from "react";
import { Link } from "@reach/router";
import { Dropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <Button variant="success" id="nav-button">
          Home{" "}
        </Button>
      </Link>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Topics
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/topics/coding">
            Coding
          </Dropdown.Item>
          <Dropdown.Item href="/topics/cooking">Cooking</Dropdown.Item>
          <Dropdown.Item href="/topics/football">Football</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
