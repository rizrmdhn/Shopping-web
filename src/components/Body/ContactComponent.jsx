import React from "react";
import { motion } from "framer-motion";
import "./styles/ContactComponent.css";

function ContactComponent() {
  return (
    <motion.div
      initial={{ y: "100vh", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vh", transition: "0.5s" }}
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
          <div class="mb-3">
            <label for="firstName" class="form-label">
              <i>First Name</i>
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              aria-describedby="firstName"
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">
              <i>Last Name *</i>
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              aria-describedby="lastName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              <i>Email address *</i>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">
              <i>Phone</i>
            </label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              aria-describedby="phoneNumber"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              <i>Message *</i>
            </label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              rows="5"
              required
            />
          </div>
          <button type="submit" class="submit-btn btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactComponent;
