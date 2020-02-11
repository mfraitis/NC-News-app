import React from "react";
// import { Dropdown } from "react-bootstrap";

const SortBy = props => {
  const { setSortBy, setOrder } = props;
  return (
    <nav id="sort-by">
      <label>
        {" "}
        Sort By :
        <select
          id="sort"
          onChange={event => {
            setSortBy(event.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>{" "}
      </label>

      <label id="sort-dropdown">
        
        Order :
        <select
          id="order"
          onChange={event => {
            setOrder(event.target.value);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
      {/* <Dropdown id="sort-dropdown">
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
      </Dropdown> */}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Order
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={setOrder} name="asc">
            ascending
          </Dropdown.Item>
          <Dropdown.Item onClick={setOrder} name="desc">
            descending
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </nav>
  );
};

export default SortBy;
