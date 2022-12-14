import React from "react";
import { Link } from "react-router-dom";
import "./styles/FooterComponent.css";

function FooterComponent() {
  return (
    <>
      <div className="footer-1">
        <div className="footer-item-container container-fluid">
          <div className="footer-item-1 row g-2 text-start">
            <div className="footer-item-1-col col">
              <p>Shipping & Returns</p>
              <p>Store Policy</p>
              <p>Payment Methods</p>
            </div>
            <div className="footer-item-1-col col">
              <p>Contact</p>
              <p>Tel: 123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
            <div className="footer-item-1-col col">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Pinterest</p>
            </div>
          </div>
          <div className="footer-item-2">
            <div className="footer-item-2-col">
              <Link to="/Contact" className="contact-use">
                Join our mailing list and never miss an update
              </Link>
            </div>
          </div>
          <div className="footer-item-3 row g-2">
            <div className="footer-item-3-col col mb-4">
              <form className="footer-form">
                <div className="footer-form-row row">
                  <div className="email-updates col-md-8">
                    {" "}
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="footer-item-3-floatingInput"
                        placeholder="name@example.com"
                        required
                      />
                      <label
                        htmlFor="footer-item-3-floatingInput"
                        id="footer-item-3-email"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="subs-col col">
                    <button className="btn subscribe-btn">Subscribe Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2 container-fluid text-center">
        <p className="footer-2-title">?? this is footer</p>
      </div>
    </>
  );
}

export default FooterComponent;
