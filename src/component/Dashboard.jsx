import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "./Authcontext";

function Dashboard() {
  const { currentUser, userdata, setuserdata, db } = useAuth();

  useEffect(() => {
    setuserdata([]);
    const fetchdatabase = async () => {
      const docref = await db.collection("users").doc(currentUser.uid);
      docref
        .get()
        .then((doc) => {
          if (doc.exists) {
            setuserdata(doc.data());
          } else {
            console.log("no file found with uid");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    return fetchdatabase();
  }, []);
  return (
    <>
    <div className="w-50 " style={{ maxWidth: "400px" ,    margin: "auto",
           marginTop : " 10%" , }}>
      <Card style={{   position: "inherit "}} >
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {userdata.avatar ? ( <div>
            <a href={userdata.avatar} className="img-thumbnail">
              <img
                src={userdata.avatar || " https://via.placeholder.com/100"}
                className="img-thumbnail"
                width="100"
                height="100"
                alt="databaseimg"
              />{" "}
            </a>
            <br />
            <strong>Email :</strong>
              {userdata.email}
            </div>
          ) : (
            <div>
            <a href={currentUser.photoURL} className="img-thumbnail">
            <img
              src={currentUser.photoURL || " https://via.placeholder.com/100"}
              width="100"
              height="100"
              alt="profile"
              className="img-thumbnail"
              />
            </a>
            <br />
              <strong>Email :</strong>
              {currentUser.email}
            </div>
          )}
          <br />
          
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-4">
            Update Profile
          </Link> */}
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Dashboard;
