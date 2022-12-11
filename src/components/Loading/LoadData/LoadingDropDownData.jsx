import React from "react";

function LoadingDropDownData({ cards }) {
  return (
    <>
      <ul className="dropdown-menu animate__animated animate__fadeIn">
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <div className="dropdown-item">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4 m-auto">
                      <img className="dropdown-image skeleton" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="dropdown-title card-title skeleton skeleton-text"></h5>
                        <p className="dropdown-text card-text skeleton skeleton-text"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default LoadingDropDownData;
