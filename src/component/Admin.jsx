import React, { useRef, useState } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "./Authcontext";
import { Link, useHistory } from "react-router-dom";
function Admin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await Login(emailRef.current.value, passwordRef.current.value);
      history.push("/admindash");
    } catch {
      setError("Failed to login");
    }

    setLoading(false);
  }
  return (
    <div
      className="w-50 "
      style={{ maxWidth: "400px", margin: "auto", marginTop: " 10%" }}
    >
      <Card style={{ position: "inherit " }}>
        <Card.Body>
          <h2 className="text-center mb-4">
            <strong>ADMIN</strong> LogIn
          </h2>
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default Admin;
