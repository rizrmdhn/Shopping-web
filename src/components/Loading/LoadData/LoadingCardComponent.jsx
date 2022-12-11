import React from "react";
import "../styles/LoadingCardComponent.css";
import { motion } from "framer-motion";

function LoadingCardComponent({ cards }) {
  return (
    <motion.div
      initial={{ y: "100vh", transition: "0.5s" }}
      animate={{ y: 0, transition: "0.5s" }}
      exit={{ y: "100vh", transition: "0.5s" }}
    >
      <div className="ShopItemContainer loader container-fluid m-auto">
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <div className="card" key={i}>
              <img className="card-img-top skeleton" />
              <div className="card-body ">
                <h5 className="card-title m-auto item-title text-center skeleton skeleton-text"></h5>
                <h5 className="card-title m-auto item-title text-center skeleton skeleton-text mt-1"></h5>
                <div className="item-border skeleton skeleton-text"></div>
                <div className="card-text text-center skeleton skeleton-text skeleton-text__body m-auto">
                  <h4 className="m-auto mt-2 item-price "></h4>
                </div>
                <div className="card-footer">
                  <a className="btn skeleton skeleton-button"></a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

export default LoadingCardComponent;
