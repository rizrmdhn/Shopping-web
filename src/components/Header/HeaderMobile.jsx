import React from "react";
import "./styles/Header.css";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function HeaderMobile({ quantity }) {
  return (
    <>
      <div className="HeaderMobile sticky-xxl-top container-fluid text-center">
        <div className="row p-2">
          <div className="Header-1 col-2">
            <div className="Header-1 Header-brand">
              <h1 className="Header-name">
                <Link to={"/"}>Shopping</Link>
              </h1>
            </div>
          </div>
          <div className="Header-3 col-2">
            <div className="Header-3">
              <Nav className="header-3-nav">
                <NavItem className="header-3-item item-1">
                  <Link className="nav-link" to="/Cart">
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                      {quantity}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="cart-icon bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Link>
                </NavItem>
                <NavItem className="header-3-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    className="mobile-menu-btn bi bi-list"
                    viewBox="0 0 16 16"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasMenu"
                    aria-controls="offCanvasMenu"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </NavItem>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMobile;
