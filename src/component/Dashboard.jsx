import React, {useState} from 'react';
import {Card , Button , Alert }from "react-bootstrap";
import { Link , useHistory} from 'react-router-dom';
import { useAuth } from "./Authcontext"

function Dashboard() {
    const [error,setError]=useState("");
    const {currentUser , Logout}=useAuth();
    const history = useHistory();
    async function handelLogout(){
        setError("")
        try{
            await Logout()
            history.push("/login")
        }
        catch{
            setError("failed to logout ")
        }

    }
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">
                    PROFILE
                </h2>
                <img src={currentUser.photoURL ||" https://via.placeholder.com/100" } width="100" height="100" alt="profile photo"  />
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email :</strong>{currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-4">Update Profile</Link>
            </Card.Body>
        </Card>
        <Button variant="link" className="mt-3" onClick={handelLogout}>Logout</Button>
        </>
    )
}

export default Dashboard
