import React from "react";

function ItemImage({ id, image, alt }) {
  return (
    <>
      <img
        src={image}
        className="card-image card-img-top"
        alt={alt}
        data-bs-toggle="modal"
        data-bs-target={`#desc${id}`}
        id={`#desc${id}`}
      />
    </>
  );
}

export default ItemImage;
