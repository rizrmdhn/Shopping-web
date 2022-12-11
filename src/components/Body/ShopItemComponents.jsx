import React from "react";
import "./styles/ShopItemContainer.css";
import ItemCard from "../Card/ItemCard";
import { motion } from "framer-motion";
import AboutPage from "../../views/AboutPage";

function ShopItemComponents({ lists, AddToCart, isLoading }) {
  return (
    <>
      <motion.div
        initial={{ y: "100vw", transition: "0.5s" }}
        animate={{ y: "0vw", transition: "0.5s" }}
        exit={{ y: "100vw", transition: "0.5s" }}
        className="ShopItemContainer container-fluid m-auto"
      >
        {lists.map((list) => {
          return (
            <ItemCard
              isLoading={isLoading}
              key={list.id}
              id={list.id}
              lists={list}
              image={list.image}
              alt={list.title}
              itemTitle={list.title}
              itemPrice={list.price}
              AddToCart={AddToCart}
            />
          );
        })}
        <AboutPage />
      </motion.div>
    </>
  );
}

export default ShopItemComponents;
