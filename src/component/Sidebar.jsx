import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as cgIcons from "react-icons/cg";
import * as goIcons from "react-icons/go";
import * as giIcons from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useAuth } from "./Authcontext";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const { currentUser, userdata, Logout, db } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);
  async function handelLogout() {
    setError("");
    try {
      await Logout();
      history.push("/login");
    } catch {
      setError("failed to logout ");
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbars">
          <Link to="/" className="ms-2 me-3 link-light text-decoration-none">
            <h4>
              <b>Fire-Quiz</b>
            </h4>
          </Link>

          {currentUser && (
            <a href={currentUser.photoURL || userdata.avatar}>
              {" "}
              <img
                src={userdata.avatar || " https://via.placeholder.com/50"}
                className="rounded-circle"
                alt="..."
                width="50"
                height="50"
              />
            </a>
          )}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items mt-2">
            <li className="navbar-toggle mt-2">
              <Link to="#" className="menu-bars">
                <cgIcons.CgArrowsExchange onClick={showSidebar} />
              </Link>
            </li>
            {!currentUser && (
              <li className="nav-text">
                <Link to="/login">
                  <span>SignIn</span>
                  <goIcons.GoSignIn />
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-text">
                <Link to="/dashborad">
                  <span>Home</span>
                  <AiIcons.AiFillHome />
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-text">
                <Link to="/update-profile">
                  <span>Profile</span>
                  <FaIcons.FaUserTie />
                </Link>
              </li>
            )}
            {currentUser && currentUser.uid === "F7POelXiD7f3BSpGwHOyeBeie3l1" && (
              <li className="nav-text">
                <Link to="/admindash">
                  <span>User</span>
                  <FaIcons.FaUserFriends />
                </Link>
              </li>
            )}
            {currentUser && currentUser.uid === "F7POelXiD7f3BSpGwHOyeBeie3l1" && (
              <li className="nav-text">
                <Link to="/dbques">
                  <span>Upload-MCQ</span>
                  <FaIcons.FaCloudUploadAlt />
                </Link>
              </li>
            )}
            <li className="nav-text">
              <Link to="/exam">
                <span>QUIZ</span>
                <goIcons.GoChecklist />
              </Link>
            </li>
            {currentUser && (
              <li className="nav-text">
                <Link to="/Mmarksheet">
                  <span>Scorecard</span>
                  <giIcons.GiCardPickup />
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-text">
                <Link to="" onClick={handelLogout}>
                  <span>SignOut</span>
                  <goIcons.GoSignOut />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
