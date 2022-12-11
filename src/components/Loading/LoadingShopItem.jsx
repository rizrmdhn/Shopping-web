import React from "react";
import ShopItemComponents from "../Body/ShopItemComponents";
import LoadingCardComponent from "./LoadData/LoadingCardComponent";

function LoadingShopItem({ lists, AddToCart, isLoading }) {
  return (
    <>
      {isLoading && <LoadingCardComponent cards={20} />}
      {!isLoading && <ShopItemComponents lists={lists} AddToCart={AddToCart} />}
    </>
  );
}

export default LoadingShopItem;
