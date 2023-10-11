import React from "react";

function HomePage() {
  return (
    <div>
      <div className="account-switch">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="toggleSwitch" />
          <label className="form-check-label" htmlFor="toggleSwitch">Switch to runnr account</label>
        </div>
      </div>
      <div  className="card-section">
        <div className="card custom-card-design">
        <img src="/public/shoe.jpeg" className="card-img-top" alt="shoe" />
          <div className="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a sample card with some content. You can add text, images, and buttons here.</p>
            <a href="/" class="btn btn-primary">Learn More</a>
          </div>
        </div>
        <div className="card custom-card-design">
          <img src="/public/another-shoe.jpeg" className="card-img-top" alt="shoe" />
          <div className="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a sample card with some content. You can add text, images, and buttons here.</p>
            <a href="/" class="btn btn-primary">Learn More</a>
          </div>
        </div>
        <div className="card custom-card-design">
          <div className="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">This is a sample card with some content. You can add text, images, and buttons here.</p>
            <a href="/" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="ts-section">
        <h3>Top Selling Products</h3>
        <div className="top-selling">

        </div>
      </div>
    </div>
  );
}

export  default HomePage