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
          <Dropdown.Item as={Link} to="/topics/coding">
            Coding
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/topics/cooking">
            Cooking
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/topics/football">
            Football
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {!username ? (
        <Dropdown alignRight>
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
