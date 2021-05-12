import SignUp from "./component/SignUp";
import {Container}from "react-bootstrap"
import { AuthProvider } from "./component/Authcontext";
import{BrowserRouter as Router , Switch , Route}from "react-router-dom"
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PrivateRoute from "./component/Privateroute";
import Forgotpassword from "./component/Forgotpassword";
import UpdateProfile from "./component/UpdateProfile";





function App() {
  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
    <Router>
    <AuthProvider>
      <Switch>
    <Route path="/Signup">
     <SignUp/>
    </Route>
    <Route path="/login">
     <Login/>
    </Route>
    <PrivateRoute exact path="/" component={Dashboard} />
    <PrivateRoute  path="/update-profile" component={UpdateProfile} />

    <Route path="/forgot-password">
     <Forgotpassword/>
    </Route>
      </Switch>
     </AuthProvider>
      </Router>
     </div>
     </Container>
      </>
  );
}

export default App;
