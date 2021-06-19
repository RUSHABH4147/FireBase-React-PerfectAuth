import React, { useState, useEffect } from "react";
import { Card} from "react-bootstrap";
import { useAuth } from "./Authcontext";

function Admindash() {
  const [doccollection, setdoccollection] = useState([]);
  const { db } = useAuth();

  useEffect(() => {
    const unsubscribe = () => {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            setdoccollection((aa) => [...aa, doc.data()]);
          });
        });
    };
    return unsubscribe();
  }, []);
  // console.log(doccollection);

  return (
    <div className="w-auto " style={{ maxWidth: "700px" ,    margin: "auto",
    marginTop  : " 10%" , }}>
     <Card style={{   position: "inherit "}} >
        <Card.Body>
          <h2 className="text-center mb-4">
            <strong>ADMIN</strong> Dashboard
          </h2>

          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">UID</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">AVATAR</th>
                </tr>
              </thead>
              <tbody>
                {doccollection.map((doc) => (
                  <tr key={doc.uid}>
                    <th scope="row">{doc.name || <p>not-set</p>}</th>
                    <td>{doc.uid}</td>
                    <td>{doc.email}</td>
                    <td>
                      <a href={doc.avatar} className="img-thumbnail">
                        <img
                          src={doc.avatar || " https://via.placeholder.com/100"}
                          className="img-thumbnail"
                          width="100"
                          height="100"
                          alt="databaseimg"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Admindash;
