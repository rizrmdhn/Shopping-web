import React from "react";
import { motion } from "framer-motion";
import "./styles/FaqComponent.css";
import FaqBody1 from "../../views/FaqBody1";
import FaqBody2 from "../../views/FaqBody2";

function FaqComponent() {
  return (
    <motion.div
      initial={{ y: "100vh", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vh", transition: "0.5s" }}
      className="faq-container container-fluid"
    >
      <div className="faq">
        <div className="faq-header-1">
          <h1 className="faq-title">FAQ</h1>
        </div>
        <div className="faq-header-2">
          <button
           data-bs-toggle="collapse"
           data-bs-target=".multi-collapse"
           aria-expanded="false"
           aria-controls="setting-up-faqs"
           className="faq-1"
           role="button"
          >
            Setting up FAQs
          </button>
          <button
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="general-faqs"
            className="faq-2"
            role="button"
          >
            General
          </button>
        </div>
        <div className="faq-body">
          <FaqBody1 />
          <FaqBody2 />
        </div>
      </div>
    </motion.div>
  );
}

export default FaqComponent;
