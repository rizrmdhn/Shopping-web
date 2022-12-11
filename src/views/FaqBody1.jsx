import React from "react";

function FaqBody1() {
  return (
    <>
      <div
        className="setting-up-faqs collapse multi-collapse show"
        id="setting-up-faqs"
      >
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
                How do I add a new question & answer?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To add a new FAQ follow these steps: <br />
                <br />
                1. Click “Manage FAQs” button <br />
                2. From your site’s dashboard you can add, edit and manage all
                your questions and answers <br />
                3. Each question and answer should be added to a category
                <br /> 4. Save and publish.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can I insert an image, video, or gif in my FAQ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes. To add media follow these steps: <br /> <br />
                1. Enter the app’s Settings <br />
                2. Click on the “Manage FAQs” button
                <br />
                3. Select the question you would like to add media to
                <br />
                4. When editing your answer click on the camera, video, or GIF
                icon
                <br />
                5. Add media from your library.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How do I edit or remove the “FAQ” title?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                You can edit the title from the Settings tab in the app. <br />
                If you don’t want to display the title, simply disable the Title
                under “Info to Display”.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqBody1;
