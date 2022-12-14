import React from "react";
import { Nav, NavItem } from "reactstrap";
import "./styles/MobileSearchBar.css";

function MobileSearchBar({ onSearch, onSearchType }) {
  const onSearchbarChange = (event) => {
    onSearch(event.target.value);
  };
  const onSearchTypeChange = (event) => {
    onSearchType(event.target.value);
  };
  return (
    <div className="mobile-search-bar container-fluid">
      <Nav className="mobile-search-nav">
        <NavItem className="mobile-search-nav-item">
          <input
            className="mobile-search-input form-control"
            type="text"
            id="mobile-search-input"
            placeholder="Search Item"
            onChange={onSearchbarChange}
          />
        </NavItem>
        <NavItem className="mobile-search-nav-item">
          <div className="form-price input-group">
            <label className="input-group-text" htmlFor="inputGroupPrice">
              Options
            </label>
            <select
              className="select-price form-select"
              id="inputGroupPrice"
              placeholder="Choose product type..."
              onChange={onSearchTypeChange}
            >
              <option defaultValue>Choose product type...</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
            </select>
          </div>
        </NavItem>
      </Nav>
    </div>
  );
}

export default MobileSearchBar;
