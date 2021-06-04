import React, { useRef, useState } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "./Authcontext";
import { useHistory } from "react-router-dom";

import "firebase/storage";
import "firebase/firestore";
import app from "../Firebase";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameref = useRef();

  const { currentUser, updatePassword, updateEmail, setfileURL, fileURL ,userdata} =
    useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const db = app.firestore();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promise = [];
    setError("");
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promise.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promise.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promise)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("failed to update ");
      })
      .finally(() => {
        setLoading(false);
      });

    //firestore data base
    const username = nameref.current.value;
    const useref = db.collection("users").doc(currentUser.uid);
    console.log(useref.id);
    const colref = useref.update(
      {
        name: username,
        avatar: fileURL,
      },
      { merge: true }
    );
    return colref;
  }
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setfileURL(await fileRef.getDownloadURL());
  };

  return (
    <div className="w-50 " style={{ maxWidth: "400px" ,    margin: "auto",
          "margin-top" : " 1%" , }}>
      <Card style={{   position: "inherit "}}>
        <Card.Body>
          <h2 className="text-center mb-4"><b>Update-Profile</b></h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="user-name">
              <Form.Label><b> Name</b></Form.Label>
              <Form.Control type="text" ref={nameref} placeholder={userdata.name || "YOU-HAVE-NOT-SET-YOUR-USER-NAME!!"}/>
            </Form.Group>
            <hr />
             {userdata && <img src={userdata.avatar ||" https://via.placeholder.com/60" }class="rounded-circle"width="60" height="60" alt="..."/>}
            <Form.Group id="profile-pic">

              <label htmlFor="formFile" className="form-label">
               <b>upload-profile-picture</b> 
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={onFileChange}
              ></input>
            </Form.Group>{" "}
            <hr />
            <Form.Group id="email">
              <Form.Label><b>Email</b></Form.Label>
              <Form.Control
                type="email"
                defaultValue={currentUser.email}
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label><b>Password Confirmation</b></Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Make updates
            </Button>
          </Form>
          {/* <p>{currentUser.uid}</p> */}
          {fileURL && alert("uploaded")}
          {/* <a href={fileURL}>{fileURL}</a> */}
        </Card.Body>
      </Card>

      {/* <div className=".w-100 text-center mt-2">
        <Link to="/login">Log In</Link>
      </div> */}
    </div>
  );
}

export default SignUp;
