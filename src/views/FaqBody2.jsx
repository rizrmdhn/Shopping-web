import React from "react";

function FaqBody2() {
  return (
    <>
      <div className="general-faqs collapse multi-collapse" id="general-faqs">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                id="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is an FAQ section?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                An FAQ section can be used to quickly answer common questions
                about you or your business, such as “Where do you ship to?”,
                “What are your opening hours?” or “How can I book a service?”
                It’s a great way to help people navigate your site and can even
                boost your site’s SEO.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqBody2;
