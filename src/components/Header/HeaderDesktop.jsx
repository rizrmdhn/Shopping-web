import React from "react";
import "./styles/Header.css";
import { Input, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function HeaderDesktop({ quantity }) {
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
                <NavLink>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="col-2 m-auto">
          <div className="Header-3">
            <Nav>
              <NavItem className="m-auto">
                <Input bsSize="sm" type="search" />
              </NavItem>
              <NavItem className="m-auto">
                <NavLink>
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                    {quantity}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDesktop;
