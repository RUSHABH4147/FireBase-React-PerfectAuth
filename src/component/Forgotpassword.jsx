import React ,{useRef , useState} from 'react';
import {Card , Form ,Alert, Button} from "react-bootstrap"
import {useAuth} from "./Authcontext";
import { Link,  } from "react-router-dom"

function Login() {
    const emailRef = useRef()
    const{resetpassword}=useAuth();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const [massage,setmassage]=useState(false);

    


    async function handleSubmit(e){
        e.preventDefault()
          try {
            setError("")
            setmassage("")
            setLoading(true)
            await resetpassword(emailRef.current.value)
            setmassage("please check inbox to reset password.")
          } catch {
            setError("Failed to create password")
          }
      
          setLoading(false)
        }


    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">
                    LogIn
                </h2>
                {massage && <Alert variant="success">{error}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Reset Password 
            </Button>
            <div className=".w-100 text-center mt-2">
              <Link variant="btn" to="/login">login</Link>       
            </div>
          </Form>
            </Card.Body>
        </Card>
            
            <div className=".w-100 text-center mt-2">
                Don't have account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default Login
