import React from "react";

function ItemBody({lists, itemTitle, itemPrice, AddToCart  }) {
  return (
    <>
      <h5 className="card-title m-auto item-title text-center">{itemTitle}</h5>
      <div className="item-border"></div>
      <div className="card-text text-center">
        <h4 className="m-auto mt-2 item-price">${itemPrice}</h4>
      </div>
      <div className="card-footer">
        <a className="btn" onClick={() => AddToCart(lists)}>
          Add To Cart
        </a>
      </div>
    </>
  );
}

export default ItemBody;
