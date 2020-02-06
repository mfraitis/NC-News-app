import React from "react";
import { Link } from "@reach/router";
import { Dropdown, Button } from "react-bootstrap";

const NavBar = props => {
  const { users, handleClick, username } = props;

  return (
    <nav>
      <Link to={"/"}>
        <Button variant="success">Home </Button>
      </Link>
      <Dropdown id="nav-button">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Topics
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* <Link to="/topics/"> */}
          <Dropdown.Item href="/topics/coding">Coding</Dropdown.Item>
          {/* </Link> */}
          {/* <Link to="/topics/"> */}
          <Dropdown.Item href="/topics/cooking">Cooking</Dropdown.Item>
          {/* </Link> */}
          {/* <Link to="/topics/"> */}
          <Dropdown.Item href="/topics/football">Football</Dropdown.Item>
          {/* </Link> */}
        </Dropdown.Menu>
      </Dropdown>

      {username ? (
        <Button id="logged-in" disabled variant="success">
          Logged in as : {username}
        </Button>
      ) : null}
      {!username ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Login as
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {users.map(username => {
              return (
                <Dropdown.Item
                  onClick={handleClick}
                  name={username}
                  key={username}
                >
                  {username}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button onClick={handleClick} name="" variant="success">
          Logout
        </Button>
      )}
    </nav>
  );
};

export default NavBar;
