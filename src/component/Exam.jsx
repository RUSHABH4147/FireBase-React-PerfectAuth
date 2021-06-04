import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Exam() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <strong>-Quiz-topic-</strong>
      </h1>
      <div
        className="row"
        style={{ maxWidth: "800px", margin: "auto", "margin-top": " 5%" }}
      >
        <div className="col-sm-6">
          <div
            className="card"
            style={{ position: "inherit ", height: "28vh" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <FaIcons.FaReact />
                REACT{" "}
              </h5>
              <p className="card-text">
                React is an open-source front-end JavaScript library for
                building user interfaces or UI components.
              </p>
              <Link to="/react" className="btn btn-primary">
                Take-Quiz
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card"
            style={{ position: "inherit ", height: "28vh" }}
          >
            <div className="card-body">
              <h5 className="card-title">example:- title </h5>
              <p className="card-text">
              example description
              </p>
              <Link to="/react" className="btn btn-primary mt-4">
                Take-Quiz
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div
            className="card"
            style={{ position: "inherit ", height: "28vh" }}
          >
            <div className="card-body">
            <h5 className="card-title">exapmple:- title </h5>
              <p className="card-text">
                example description
              </p>
              <Link to="/react" className="btn btn-primary mt-3">
                Take-Quiz
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div
            className="card"
            style={{ position: "inherit ", height: "28vh" }}
          >
            <div className="card-body">
              <h5 className="card-title">example</h5>
              <p className="card-text">
                example
              </p>
              <Link to="/react" className="btn btn-primary mt-3">
                Take-Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;
