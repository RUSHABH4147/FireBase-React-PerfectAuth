import React ,{useRef , useState} from 'react';
import {Card , Form ,Alert, Button} from "react-bootstrap"
import {useAuth} from "./Authcontext";
import { Link, useHistory } from "react-router-dom"

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {Singup ,gogglesignin}=useAuth();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const history = useHistory();



    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
          try {
            setError("")
            setLoading(true)
            await Singup(emailRef.current.value, passwordRef.current.value)
            console.log("done")
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
      
          setLoading(false)
        }

        async function popup(){
          try{
            setError("")
            setLoading(true)
            gogglesignin()
          }
         catch {
          setError("Failed to create an account")
        } finally{
          history.push("/")
        }
    
        setLoading(false)
      }
        


    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">
                Sign Up
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className=".w-100 text-center mt-2">
              <Link variant="btn" to="#" onClick={popup}>Or google log in</Link>       
            </div>
            </Card.Body>
        </Card>
            
            <div className=".w-100 text-center mt-2">
                Already have account ? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

export default SignUp
