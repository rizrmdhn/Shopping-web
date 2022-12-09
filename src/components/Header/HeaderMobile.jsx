import React from "react";
import "./styles/Header.css";
import { Input, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

function HeaderMobile({ quantity, lists, onSearch }) {
  const onSearchbarChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="HeaderDesktop sticky-xxl-top container-fluid text-center">
      <div className="row mt-3 p-2">
        <div className="col-2 m-auto">
          <div className="Header-1 Header-brand">
            <h1 className="Header-name">Shopping</h1>
          </div>
        </div>
        <div className="col-5 m-auto">
          <div className="Header-2 menu">
            <Nav>
              <NavItem>
                <Link className="nav-link" to="/">
                  Shop
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" href="About" to="/">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/FAQ">
                  FAQ
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="col-2 m-auto">
          <div className="Header-3">
            <Nav>
              <NavItem className="m-auto">
                <Input
                  onChange={onSearchbarChange}
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  bsSize="sm"
                  type="text"
                />
                <DropDownMenu lists={lists} />
              </NavItem>
              <NavItem className="m-auto">
                <Link className="nav-link">
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                    {quantity}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
