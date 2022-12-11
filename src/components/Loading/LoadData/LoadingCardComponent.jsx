import React from "react";

function LoadingCardComponent({ cards }) {
  return (
    <div className="ShopItemContainer container-fluid m-auto">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div className="card" key={i}>
            <img className="card-img-top skeleton" />
            <div className="card-body ">
              <h5 className="card-title m-auto item-title text-center skeleton skeleton-text"></h5>
              <div className="item-border"></div>
              <div className="card-text text-center skeleton skeleton-text skeleton-text__body m-auto">
                <h4 className="m-auto mt-2 item-price "></h4>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default LoadingCardComponent;
