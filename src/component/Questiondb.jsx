import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "./Authcontext";

function Questiondb() {
  const { db } = useAuth();
  const colname = useRef();
  const docname = useRef();
  const ques = useRef();
  const op1 = useRef();
  const op2 = useRef();
  const op3 = useRef();
  const op4 = useRef();

  const [question, setquestion] = useState([]);
  async function addmore() {
      
    setquestion((aa) => [
      ...aa,
      {
        ques: ques.current.value,
        anss: [
          {
            name: op1.current.value,
            options: op1.current.value,
            iscorrect: "",
          },
          {
            name: op1.current.value,
            options: op2.current.value,
            iscorrect: "",
          },
          {
            name: op1.current.value,
            options: op3.current.value,
            iscorrect: "",
          },
          {
            name: op1.current.value,
            options: op4.current.value,
            iscorrect: "",
          },
        ],
      },
    ]);
  }
  console.log(question);

  async function handlesubmit(e) {
    e.preventDefault();
    await db.collection(colname.current.value).doc(docname.current.value).set(
      {
        question,
      },
      { merge: true }
    );
  }
  return (
    <div
      className="w-100 "
      style={{ maxWidth: "900px", margin: "auto",  marginTop : " 7%" }}
    >
      <h1 style={{ textAlign: "center" }}>
        <strong>-Create-MCQ-test-</strong>
      </h1>

      <Card style={{ position: "inherit " }}>
        <Card.Body>
          <form className="row g-3" action="post" onSubmit={handlesubmit}>
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">
                Collection Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                ref={colname}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">
                DOC name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                ref={docname}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationDefault02" className="form-label">
                question
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                ref={ques}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationDefaultUsername" className="form-label">
                options
              </label>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span htmlFor="validationDefault01" className="form-label">
                  1)
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  ref={op1}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span htmlFor="validationDefault01" className="form-label">
                  2)
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  ref={op2}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span htmlFor="validationDefault01" className="form-label">
                  3)
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  ref={op3}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span htmlFor="validationDefault01" className="form-label">
                  4)
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  ref={op4}
                />
              </div>
            </div>

            <div className="col-12">
              <button
                className="btn btn-primary"
                type="button"
                onClick={addmore}
              >
                {" "}
                +add question+
              </button>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Questiondb;
