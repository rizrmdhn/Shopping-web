import React from "react";
import "./styles/ModalDetails.css";

function ModalDetailItems({ lists, AddToCart }) {
  return (
    <>
      <div
        className="modal fade"
        id={`desc${lists.id}`}
        tabIndex="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-4" id="exampleModalLabel">
                {lists.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card mt-2">
                <div className="row">
                  <div className="col-4">
                    <img
                      src={lists.image}
                      className="modal-image"
                      alt={lists.title}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body m-auto">
                      <h5 className="modal-card-title card-title">
                        {lists.title}
                      </h5>
                      <h6 className="modal-card-category">{lists.category}</h6>
                      <div className="modal-card-line"></div>
                      <div className="modal-card-description">
                        <p className="modal-card-text card-text">
                          {lists.description}
                        </p>
                      </div>
                      <div className="modal-card-line"></div>
                      <h4 className="modal-card-price">$ {lists.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modal-close-button btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="modal-add2card-button btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => AddToCart(lists)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetailItems;
