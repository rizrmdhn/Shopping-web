import React from "react";
import "./styles/ShopItemContainer.css";
import ItemCard from "../Card/ItemCard";

function ShopItemComponents({ lists, AddToCart }) {
  return (
    <div className="ShopItemContainer container-fluid m-auto">
      {lists.map((list) => {
        return (
          <ItemCard
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
    </div>
  );
}

export default ShopItemComponents;
