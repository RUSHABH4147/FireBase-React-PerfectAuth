import React from "react";
import svgcovers from "./svgcover.svg";
import svgsecond from "./svgsecond.svg";

function Home() {
  return (
    <div>
      <div
        className="front-first-block content-area mt-5"
        style={{ marginLeft: "56px", height: "83vh" }}
      >
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <img
                src={svgcovers}
                alt=".."
                height="450"
                width="600"
                style={{ padding: "30px" }}
              />
            </div>
            <div className="col-md-6 mt-5">
              <img
                src={svgsecond}
                alt=".."
                height="500"
                width="600"
                style={{ padding: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
