import React, { useRef, useState } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "./Authcontext";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Login, currentUser, gogglesignin, db } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [massage, setmassage] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      if (emailRef.current.value === "admin@admin.com") {
        return setError("go to admin signin");
      }
      await Login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashborad");
    } catch {
      setError("Failed to login");
    }

    setLoading(false);
  }
  function dash() {
    history.push("/dashborad");
  }
  async function popup() {
    try {
      setError("");
      setLoading(true);
      await gogglesignin();
      setmassage(true);
    } catch {
      setError("Failed to create an account with google ");
    }

    setLoading(false);
  }
  if (massage) {
    db.collection("users").doc(currentUser.uid).set(
      {
        uid: currentUser.uid,
        email: currentUser.email,
        avatar: currentUser.photoURL,
      },
      { merge: true }
    );
    history.push("/dashborad");
  }

  return (
    <>
      {!currentUser ? (
        <div
          className="w-100 "
          style={{ maxWidth: "400px", margin: "auto", marginTop: " 10% " }}
        >
          <Card style={{ position: "inherit " }}>
            <Card.Body>
              <h2 className="text-center mb-4">LogIn</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <div className=".w-100 text-center mt-2">
                  <Link variant="btn" to="/forgot-password">
                    Forgot password??
                  </Link>
                </div>
                <Button disabled={loading} className="w-100 mt-4" type="submit">
                  Log In
                </Button>
              </Form>
              <div className=".w-100 text-center mt-2">
                <Link variant="btn" to="#" onClick={popup}>
                  Or google log in
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className=".w-100 text-center mt-2">
            Don't have account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      ) : (
        <div
          className="w-100 "
          style={{ maxWidth: "400px", margin: "auto", "margin-top": " 10% " }}
        >
          <Card style={{ position: "inherit " }}>
            <Card.Body>
              <h6>
                <strong>Email: </strong> {currentUser.email}
              </h6>
              <Button
                disabled={loading}
                onClick={dash}
                className="w-100 mt-4"
                type="submit"
              >
                Log In
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default Login;
