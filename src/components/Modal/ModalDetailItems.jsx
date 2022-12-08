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
        <div className="modal-dialog modal-dialog-centered modal-lg">
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
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={lists.image}
                      className="modal-image"
                      alt={lists.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body m-auto">
                      <h5 className="modal-card-title card-title">{lists.title}</h5>
                      <p className="modal-card-text card-text">{lists.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={() => AddToCart(lists)}>
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
