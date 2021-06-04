import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";

export default function Navbars() {
  const { currentUser, Logout } = useAuth();
  const [error, setError] = useState("");

  const history = useHistory();

  async function handelLogout() {
    setError("");
    try {
      await Logout();
      history.push("/login");
    } catch {
      setError("failed to logout ");
    }
  }

  return (
    <div>
      <Navbar className="shadow-lg" bg="dark" variant="dark" expand="lg">
        <Link to="/" className="ms-2 me-3 link-light text-decoration-none">
          <b>Fire-Quiz</b>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="mt-2 me-3 link-light text-decoration-none"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="mt-2 me-2 link-light text-decoration-none"
              to="/Signup"
            >
              Signup
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {currentUser ? (
            <Button
              variant="outline-light"
              className="mr-sm-2 ms-3"
              onClick={handelLogout}
            >
              Logout
            </Button>
          ) : (
            <p></p>
          )}
        </Navbar.Collapse>
      </Navbar>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>{error}</strong> try again.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}
