import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CartListComponent from "./Body/CartListComponent";
import FaqComponent from "./Body/FaqComponent";
import ContactComponent from "./Body/ContactComponent";
import ShopItemComponents from "./Body/ShopItemComponents";
import { AnimatePresence } from "framer-motion";
import LoadingShopItem from "./Loading/LoadingShopItem";

function AnimatedRoutes({
  lists,
  AddToCart,
  cart,
  subTotalPrice,
  RemoveFromCart,
  RemoveAllFromCart,
  isLoading,
  onSearch,
  onSearchType,
}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <LoadingShopItem
              lists={lists}
              AddToCart={AddToCart}
              isLoading={isLoading}
              onSearch={onSearch}
              onSearchType={onSearchType}
            />
          }
        />
        <Route exact path="/FAQ" element={<FaqComponent />} />
        <Route exact path="/Contact" element={<ContactComponent />} />
        <Route
          exact
          path="/Cart"
          element={
            <CartListComponent
              cart={cart}
              subTotalPrice={subTotalPrice}
              AddToCart={AddToCart}
              RemoveFromCart={RemoveFromCart}
              RemoveAllFromCart={RemoveAllFromCart}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
