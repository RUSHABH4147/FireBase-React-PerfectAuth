import React ,{useRef , useState} from 'react';
import {Card , Form ,Alert, Button} from "react-bootstrap"
import {useAuth} from "./Authcontext";
import { Link, useHistory } from "react-router-dom"

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser ,updatePassword,updateEmail}=useAuth();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const history = useHistory();



    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
         
          const promise =[]
          setError("");
          setLoading(true);
          if(emailRef.current.value!== currentUser.email){
              promise.push(updateEmail(emailRef.current.value))
          }
          if(passwordRef.current.value){
              promise.push(updatePassword(passwordRef.current.value))
          }

          Promise.all(promise).then(()=>{
          history.push("/")}).catch(()=>{
              setError("failed to update ")
          }).finally(()=>{
              setLoading(false)
          })
    }


    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">
                Update your profile
                </h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" defaultValue={currentUser.email} ref={emailRef}  />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"  />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"  />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
             Make updates
            </Button>
          </Form>
            </Card.Body>
        </Card>
            
            <div className=".w-100 text-center mt-2">
                <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

export default SignUp