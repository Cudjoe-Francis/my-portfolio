import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProjectSummary = () => {
  return (
    <div className="summary-container">
      <div className="summary-heading">Project Summary</div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {/*  */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Todo List App
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              This Todo List App helps users stay organized by allowing them to
              manage tasks easily. It’s useful in daily life for tracking work,
              study, or personal goals. By setting priorities and deadlines,
              users can boost productivity, avoid forgetting important tasks,
              and develop better time management habits.
            </div>
          </div>
        </div>

        {/*  */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Movie App
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              This Movie App helps users discover, search, and explore movies
              with ease. It provides details like ratings, genres, and
              descriptions, making it useful for choosing what to watch. In the
              real world, it saves time, improves user experience, and can be
              expanded to recommend movies based on preferences.
            </div>
          </div>
        </div>

        {/*  */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Image Gallery
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              An Image Gallery App offers a simple and organized way to browse
              and manage photos. It's helpful for showcasing portfolios, storing
              memories, or presenting visual content. With smooth navigation and
              a clean design, it enhances the user experience and can be
              expanded with features like filtering or category views.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
