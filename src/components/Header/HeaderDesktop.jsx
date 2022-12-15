import React from "react";
import "./styles/Header.css";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import LoadingDropDownItem from "../Loading/LoadingDropDownItem";

function HeaderDesktop({ quantity, lists, cart, onSearch, isLoading }) {
  const onSearchbarChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <div className="HeaderDesktop sticky-xxl-top container-fluid text-center">
        <div className="row p-2">
          <div className="Header-1 col-2">
            <div className="Header-1 Header-brand">
              <h1 className="Header-name">Shopping</h1>
            </div>
          </div>
          <div className="Header-2 col-6">
            <div className="Header-2 menu">
              <Nav>
                <NavItem>
                  <Link className="nav-link" to="/">
                    Shop
                  </Link>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="/#about-page">
                    About
                  </a>
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
          <div className="Header-3 col-2">
            <div className="Header-3">
              <Nav className="header-3-nav">
                <NavItem className="nav-item-responsive">
                  <form className="Header-3-form form">
                    <button>
                      <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                      >
                        <path
                          d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                          stroke="currentColor"
                          strokeWidth="1.333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <input
                      className="search-input input dropdown-toggle"
                      onChange={onSearchbarChange}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      placeholder="Search item"
                      required=""
                      type="text"
                    />
                    <button className="reset" type="reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                    <LoadingDropDownItem lists={lists} isLoading={isLoading} />
                  </form>
                </NavItem>
                <NavItem className="nav-item-responsive-item-2">
                  {cart.length !== 0 ? (
                    <Link className="nav-link">
                      <i
                        className="cart-icon bi bi-cart-fill"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offCanvasCart"
                        aria-controls="offCanvasCart"
                      >
                        <span className="badge rounded-pill bg-danger">
                          {quantity}
                        </span>
                      </i>
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/Cart">
                      <i
                        className="cart-icon bi bi-cart-fill"
                      >
                        <span className="badge rounded-pill bg-danger">
                          {quantity}
                        </span>
                      </i>
                    </Link>
                  )}
                </NavItem>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDesktop;
