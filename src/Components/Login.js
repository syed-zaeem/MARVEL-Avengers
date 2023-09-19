import React from "react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MARVEL_logo from "../MyImages/MARVEL_logo.png";

const Login = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const closeRef = useRef(null);

  const [credentials, setCredentials] = useState({email: "", password: ""})

  useEffect(() => {
    ref.current.click();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    const json = await response.json()
    console.log(json)

    if(json.success){
      localStorage.setItem("token", null);
      localStorage.setItem('token', json.userToken)
      // localStorage.setItem('token', "1234567890")
      navigate("/");
      closeRef.current.click();
      alert("You Logged In Successfully!")
    }
    else{
      alert("Invalid Details!")
    }

    console.log(credentials)
  };

  const OpenSignupFromLogin = () => {
    closeRef.current.click();
    navigate("/Signup");
  }

  const onChange = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value})
  }

  return (
    <div style={{}}>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div
            className="modal-content"
            style={{
              backgroundColor: props.mode === "dark" ? "#000000d9" : "white",
            }}
          >
            {/* <div className="modal-header"> */}

            <button
              type="button"
              className="my-2"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                marginLeft: "92%",
                backgroundColor: props.mode === "dark" ? "black" : "white",
                border:
                  props.mode === "dark"
                    ? "1px solid #000000d9"
                    : "1px solid white",
                fontSize: "22px",
                color: props.mode === "dark" ? "white" : "black",
                height: "20px",
              }}
            >
              X
            </button>
            {/* </div> */}

            <div className="modal-body">
              <img
                className=""
                src={MARVEL_logo}
                alt="This is not found."
                style={{ height: "50px", width: "30%", marginLeft: "35%" }}
              />
              <p
                className="my-3"
                style={{ marginLeft: "42%", fontSize: "22px", color: "red" }}
              >
                Sign In
              </p>
              <form onSubmit={handleClick}>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  onChange={onChange}
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your Email"
                  value={credentials.email}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  id="password"
                  name="password"
                  onChange={onChange}
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your Password"
                  value={credentials.password}
                  minLength={5}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-danger my-1"
                  style={{ marginLeft: "13%", width: "74%" }}
                >
                  Sign In
                </button>
              </form>
            </div>

            <div className="text-muted mt-3 mb-4 mx-5 d-flex">
                    Don,t have an account? &nbsp;
                    <p className="fw-bold text-body">
                      <u className="text-danger" style={{cursor: 'pointer'}} onClick={OpenSignupFromLogin}>Sign Up</u>
                    </p>
            </div>

            <div className="modal-footer d-none">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                // onClick={handleClick}
                ref={closeRef}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
