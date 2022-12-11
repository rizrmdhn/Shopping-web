import React from "react";
import "./styles/ItemCard.css";
import ItemBody from "../../views/ItemBody";
import ItemImage from "../../views/ItemImage";
import LoadingCardComponent from "../Loading/LoadData/LoadingCardComponent";

function ItemCard({
  id,
  lists,
  image,
  alt,
  itemTitle,
  itemPrice,
  AddToCart,
  isLoading,
}) {
  return (
    <>
      <div className="card">
        <ItemImage id={id} image={image} alt={alt} />
        <div className="card-body">
          <ItemBody
            lists={lists}
            itemTitle={itemTitle}
            itemPrice={itemPrice}
            AddToCart={AddToCart}
          />
        </div>
      </div>
    </>
  );
}

export default ItemCard;
