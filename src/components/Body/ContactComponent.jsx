import React from "react";
import { motion } from "framer-motion";
import "./styles/ContactComponent.css";

function ContactComponent() {
  return (
    <motion.div
      initial={{ y: "100vw", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vw", transition: "0.5s" }}
      className="contact-form container-fluid"
    >
      <div className="contact-form-header text-center">
        <h1 className="contact-form-title">Contact</h1>
        <h5 className="contact-form-message">
          You're welcome to contact us with any inquiry
        </h5>
        <h6 className="contact-form-contacts">
          Tel: 123-456-7890 | info@mysite.com
        </h6>
      </div>
      <div className="contact-form">
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              <i>First Name</i>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="firstName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              <i>Last Name *</i>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="lastName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <i>Email address *</i>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              <i>Phone</i>
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              aria-describedby="phoneNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <i>Message *</i>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-btn btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactComponent;
