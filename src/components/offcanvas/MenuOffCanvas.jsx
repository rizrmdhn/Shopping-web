import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./styles/MenuOffCanvas.css";

function MenuOffCanvas() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offCanvasMenu"
        aria-labelledby="offCanvasMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offCanvasCartTitle">
            Menu
          </h5>
          <button
            type="button"
            className="btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="btn-close-offcanvas bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
        </div>
        <div className="offcanvas-body">
          <Nav className="mobile-nav">
            <NavItem>
              <Link className="nav-link" to="/">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offCanvasMenu"
                  aria-controls="offCanvasMenu"
                >
                  Shop
                </button>
              </Link>
            </NavItem>
            <NavItem>
              <button
                className="about-btn nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offCanvasMenu"
                aria-controls="offCanvasMenu"
              >
                <a href="">About</a>
              </button>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/FAQ">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offCanvasMenu"
                  aria-controls="offCanvasMenu"
                >
                  FAQ
                </button>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Contact">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offCanvasMenu"
                  aria-controls="offCanvasMenu"
                >
                  Contact
                </button>
              </Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default MenuOffCanvas;
