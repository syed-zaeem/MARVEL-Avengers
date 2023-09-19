import React from "react";
import MARVEL_logo from "../MyImages/MARVEL_logo.png";
import "../Navbar.css"

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

export default function Navbar(props) {
  // const styles = {
  //   // fontSize: '18px',
  //   // transition: 'font-size 0.3s ease',
  //   background: "black",
  // };

  // const hoverStyles = {

  //   background: "white",
  // };

  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // const ref = useRef(null);
  // const refOpenSecond = useRef(null);

  let location = useLocation();

  // const startLoading = () => {
  //   props.setProgress(0);
  // };

  // const handleClick = () => {
  //   ref.current.click();
  // };

  // const openSecond = () => {
  //   refOpenSecond.current.click();
  //   setOpen(true);
  // };

  // const closeSecond = () => {
  //   setOpen(false);
  // };

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/")
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "dark" ? "dark" : "light"
        }`}
        style={{
          background: props.mode === "dark" ? "black" : "white",
          position: "sticky",
          top: "0",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand text-danger"
            // onClick={startLoading}
            to="/"
            style={{ fontSize: "20px" }}
          >
            {/* <img src={Real} alt="Image is not found." style={{height: '40px', width: '110px'}} /> */}
            <b>AVENGERS</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    // e.target.style.color = props.mode === 'dark'? "white":'black';
                    e.target.style.color =
                      location.pathname === "/"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Characters"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    // e.target.style.color = props.mode === 'dark'? "white":'black';
                    e.target.style.color =
                      location.pathname === "/Characters"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Characters"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Movies"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    // e.target.style.color = props.mode === 'dark'? "white":'black';
                    e.target.style.color =
                      location.pathname === "/Movies"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Movies"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Series"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color =
                      location.pathname === "/Series"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Series"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Quizz"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color =
                      location.pathname === "/Quizz"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Quizz"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  Quizz
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Login"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color =
                      location.pathname === "/Login"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Login"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  SignIn
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Signup"
                  onMouseOver={(e) => {
                    e.target.style.color = "#f5493d";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color =
                      location.pathname === "/Signup"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black";
                  }}
                  // onClick={startLoading}
                  style={{
                    color:
                      location.pathname === "/Signup"
                        ? "#f5493d"
                        : props.mode === "dark"
                        ? "white"
                        : "black",
                  }}
                >
                  SignUp
                </Link>
              </li> */}

              <div className="d-flex navbar_logo">
                <img
                  src={MARVEL_logo}
                  alt="This is not found"
                  style={{ height: "40px", width: "110px" }}
                />
              </div>
            </ul>
            {localStorage.getItem('token')?<button className="btn btn-outline-danger logout_button" style={{marginRight: '30px'}} onClick={handleLogout}>Log Out</button>:""}
            <div className="form-check form-switch" style={{marginRight: '30px'}}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{cursor: 'pointer'}}
                onClick={(e) => {
                  props.toggleMode();
                  if (e.target.style.backgroundColor === "red") {
                    e.target.style.backgroundColor = "white";
                  } else {
                    e.target.style.backgroundColor = "red";
                    e.target.style.borderColor = "black";
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Theme
              </label>
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
}
