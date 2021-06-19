import SignUp from "./component/SignUp";
// import { Container } from "react-bootstrap";
import { AuthProvider } from "./component/Authcontext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./component/Privateroute";
import Forgotpassword from "./component/Forgotpassword";
import UpdateProfile from "./component/UpdateProfile";
// import Navbars from "./component/Navbars";
import Admin from "./component/Admin";
import Admindash from "./component/Admindash";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import Qqpaper from "./component/Qqpaper";
import Exam from "./component/Exam";
import Questiondb from "./component/Questiondb";
import Mmarksheet1 from "./component/Mmarksheet1";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          {/* <Navbars /> */}
          <Sidebar />
          {/* <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          > */}
          {/* <div className="w-100" style={{maxWidth:"700px"}}> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/dashborad" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute path="/react" component={Qqpaper} />
            <PrivateRoute path="/dbques" component={Questiondb} />
            <PrivateRoute path="/Mmarksheet" component={Mmarksheet1} />

            <PrivateRoute exact path="/admindash" component={Admindash} />
            <Route path="/forgot-password">
              <Forgotpassword />
            </Route>
            <Route path="/dbques">
              <Questiondb />
            </Route>
            <Route path="/exam">
              <Exam />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
          {/* </div> */}
          {/* </Container> */}
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
