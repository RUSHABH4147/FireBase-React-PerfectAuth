import React, { useRef, useState } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "./Authcontext";
import { Link } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { Singup, currentUser, db } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [massage, setmassage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await Singup(emailRef.current.value, passwordRef.current.value);
      console.log("done");
      setmassage("Account created successfully !! please login ");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  if (massage) {
    db.collection("users").doc(currentUser.uid).set(
      {
        uid: currentUser.uid,
        email: currentUser.email,
        avatar:currentUser.photoURL
      },
      { merge: true }
    );
  }

  return (
    <>
      <div className="w-50 " style={{ maxWidth: "400px" ,    margin: "auto",
          "margin-top" : " 10%" , }}>
      <Card style={{   position: "inherit "}} >
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {massage && <Alert variant="success">{massage}</Alert>}
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
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className=".w-100 text-center mt-2">
          Already have account ? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
