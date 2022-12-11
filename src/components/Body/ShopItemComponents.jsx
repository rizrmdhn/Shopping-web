import React from "react";
import "./styles/ShopItemContainer.css";
import ItemCard from "../Card/ItemCard";
import { motion } from "framer-motion";

function ShopItemComponents({ lists, AddToCart, isLoading }) {
  return (
    <>
      <motion.div
        initial={{ y: "100vh", transition: "0.5s" }}
        animate={{ y: 0, transition: "0.5s" }}
        exit={{ y: "100vh", transition: "0.5s" }}
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
      </motion.div>
    </>
  );
}

export default ShopItemComponents;
