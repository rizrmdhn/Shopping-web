import React from "react";
import ShopItemComponents from "../Body/ShopItemComponents";
import LoadingCardComponent from "./LoadData/LoadingCardComponent";

function LoadingShopItem({ lists, AddToCart, isLoading, onSearch, onSearchType }) {
  return (
    <>
      {isLoading && <LoadingCardComponent cards={20} />}
      {!isLoading && <ShopItemComponents lists={lists} AddToCart={AddToCart} onSearch={onSearch} onSearchType={onSearchType} />}
    </>
  );
}

export default LoadingShopItem;
