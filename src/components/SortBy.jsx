import React from "react";
import { Dropdown } from "react-bootstrap";

const SortBy = props => {
  const { setSortBy, setOrder } = props;
  return (
    <nav id="sort-by">
      <Dropdown id="sort-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={setSortBy} name="created_at">
            Date
          </Dropdown.Item>
          <Dropdown.Item onClick={setSortBy} name="comment_count">
            Comment Count
          </Dropdown.Item>
          <Dropdown.Item onClick={setSortBy} name="votes">
            Votes
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          order
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={setOrder} name="asc">
            ascending
          </Dropdown.Item>
          <Dropdown.Item onClick={setOrder} name="desc">
            descending
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default SortBy;
