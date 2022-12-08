import React from "react";

function DropDownMenu({ lists }) {
  return (
    <>
      <ul className="dropdown-menu">
        {lists.map((list) => {
          return (
            <li key={list.id}>
              <div className="dropdown-item">
                <div
                  className="card"
                  data-bs-toggle="modal"
                  data-bs-target={`#desc${list.id}`}
                  id={`#desc${list.id}`}
                >
                  <div className="row g-0">
                    <div className="col-md-4 m-auto">
                      <img
                        className="dropdown-image"
                        src={list.image}
                        alt={list.image}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="dropdown-title card-title">
                          {list.title}
                        </h5>
                        <p className="dropdown-text card-text">
                          {list.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDownMenu;
