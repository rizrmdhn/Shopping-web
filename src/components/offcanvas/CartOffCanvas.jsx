import React from "react";
import { Link } from "react-router-dom";
import "./styles/CartOffCanvas.css";

function CartOffCanvas({
  cart,
  subTotalPrice,
  AddToCart,
  RemoveFromCart,
  RemoveAllFromCart,
}) {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offCanvasCart"
        aria-labelledby="offCanvasCart"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="btn-close-offcanvas bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <h5 className="offcanvas-title" id="offCanvasCartTitle">
            Cart
          </h5>
        </div>
        <div className="offcanvas-body">
          <div className="cart-list-item">
            {cart.map((list) => {
              return (
                <div className="card mb-3" key={list.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={list.image}
                        className="cart-item-image img-fluid rounded-start"
                        alt={list.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-header row">
                          <div className="card-title col-10 mt-1">
                            <h6 className="card-title-text text-muted">
                              {list.title}
                            </h6>
                          </div>
                          <div className="remove-from-cart col-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="remove-from-cart bi bi-x-lg"
                              viewBox="0 0 16 16"
                              onClick={() => RemoveAllFromCart(list.id)}
                            >
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                          </div>
                        </div>
                        <h5 className="card-text mb-3">$ {list.price}</h5>
                        <div className="cart-quantity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="remove bi bi-dash mb-1"
                            viewBox="0 0 16 16"
                            onClick={() => RemoveFromCart(list.id)}
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                          </svg>
                          <p className="quantity">{list.quantity}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="add bi bi-plus-lg mb-1"
                            viewBox="0 0 16 16"
                            onClick={() => AddToCart(list)}
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row g-0">
            <div className="cart-order">
              <div className="order-summary">
                <div className="col">
                  <h4 className="subtotal col m-auto mb-3">Subtotal</h4>
                  <h4 className="subtotal-price col m-auto">
                    $ {subTotalPrice}
                  </h4>
                </div>
              </div>
              <div className="Line-2"></div>
              <button
                className="checkout-btn btn w-100 mt-4"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <Link to="/Cart">View Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartOffCanvas;
