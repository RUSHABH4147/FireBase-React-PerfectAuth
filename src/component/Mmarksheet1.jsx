import { useAuth } from "./Authcontext";
import { Card } from "react-bootstrap";

function Mmarksheet1(props) {
  const { score } = useAuth();

  return (
    <div
      className="w-100 "
      style={{ maxWidth: "600px", margin: "auto", marginTop: " 3%" }}
    >
      <h1 style={{ textAlign: "center" }}>
        <strong>
          <h1>RESULT</h1>
        </strong>
      </h1>

      <Card style={{ position: "inherit " }}>
        <Card.Body>
          <br />
          <p>total question are 10</p>
          <h5>NUMBER OF QUESTIONS ARE CORECCT IS :{score}</h5>
          <br />
          <br />
          <h5>NUMBER OF INCORRECT QUESTIONS ARE :{10 - score} </h5>
          <br />
          <br />
          <h5>Obtained Score : {score * 2}!!</h5>
          <br />
          <br />
          {/* <h1>Total Questions attempted : {(10-(props.sc))+props.mark}</h1> */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Mmarksheet1;
