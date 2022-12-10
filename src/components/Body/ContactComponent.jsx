import React from "react";
import { motion } from "framer-motion";

function ContactComponent() {
  return (
    <motion.div
      initial={{ y: "100vh", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vh", transition: "0.5s" }}
    >
      ContactComponent
    </motion.div>
  );
}

export default ContactComponent;
