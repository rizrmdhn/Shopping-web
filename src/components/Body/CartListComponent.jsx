import React from "react";
import { Link } from "react-router-dom";
import "./styles/CartListComponent.css";

function CartListComponent({ id, cart, subTotalPrice, AddToCart }) {
  return (
    <>
      {cart.length !== 0 ? (
        <div className="cart-component-flex">
          <div className="cart-list">
            <div className="cart-header">
              <h4 className="cart-title ms-4 text-muted">My cart</h4>
            </div>
            <div className="Line-1"></div>
            <div className="cart-item">
              {cart.map((list) => {
                return (
                  <div className="card mb-3" key={list.id}>
                    <div className="row g-0">
                      <div className="col-2 m-auto">
                        <img
                          src={list.image}
                          className="cart-item-image img-fluid rounded-start"
                          alt={list.title}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className=" col-5 m-auto">
                              <h5
                                className="card-title cart-item-title"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Tooltip on top"
                              >
                                {list.title}
                              </h5>
                            </div>
                            <div className="col-3 m-auto">
                              <div className="cart-quantity">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="remove bi bi-dash mb-1"
                                  viewBox="0 0 16 16"
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
                            <div className="col text-end m-auto me-3">
                              <h5 className="cart-price">${list.totalPrice}</h5>
                            </div>
                            <div className="col-sm-1 m-auto">
                              <h5 className="cart-exit">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="remove-from-cart bi bi-x-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                              </h5>
                            </div>
                          </div>
                          <p className="card-text m-auto">${list.price}</p>
                          <p className="card-text m-auto">
                            Category: {list.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-order-header">
              <h4 className="cart-title text-muted">Order Summary</h4>
            </div>
            <div className="Line-2"></div>
            <div className="order-summary">
              <div className="row mt-5">
                <h5 className="subtotal col m-auto">Subtotal</h5>
                <h5 className="subtotal-price col m-auto text-end">
                  ${subTotalPrice}
                </h5>
              </div>
            </div>
            <div className="Line-2"></div>
            <div className="order-total">
              <div className="row mt-4">
                <h4 className="total col m-auto">Total</h4>
                <h4 className="total-price col m-auto text-end">
                  ${subTotalPrice}
                </h4>
              </div>
            </div>
            <button className="checkout-btn btn w-100 mt-4">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart-list">
          <div className="cart-empty-list">
            <h4 className="myCart ms-4 text-muted">My Cart</h4>
            <div className="Line-1"></div>
            <div className="empty-cart-message m-auto text-center">
              <h5 className="empty-message"> Cart is empty</h5>
              <Link className="continue-to-shop h6 ms-1" to="/">
                Continue Shopping
              </Link>
            </div>
            <div className="Line-1"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartListComponent;
