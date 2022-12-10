import React from "react";
import { motion } from "framer-motion";

function FaqComponent() {
  return (
    <motion.div
      initial={{ y: "100vh", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vh", transition: "0.5s" }}
      className=""
    >
      FaqComponent
    </motion.div>
  );
}

export default FaqComponent;
