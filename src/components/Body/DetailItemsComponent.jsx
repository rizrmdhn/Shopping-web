import React from "react";
import ModalDetailItems from "../Modal/ModalDetailItems";

function DetailItemsComponent({ lists, AddToCart }) {
  return (
    <div className="Details">
      {lists.map((list) => {
        return (
          <ModalDetailItems key={list.id} lists={list} AddToCart={AddToCart} />
        );
      })}
    </div>
  );
}

export default DetailItemsComponent;
