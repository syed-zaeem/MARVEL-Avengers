import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MARVEL_logo from "../MyImages/MARVEL_logo.png";

const Signup = (props) => {
  let navigate = useNavigate();
  const ref = useRef(null);
  const closeRef = useRef(null);
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    password: "",
    cpassword: "",
    email: "",
    contact: "",
    gender: "",
  });

  useEffect(() => {
    ref.current.click();
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    if (credentials.password === credentials.cpassword) {
      const response = await fetch(
        "http://localhost:5000/api/users/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
            contact: credentials.contact,
            gender: credentials.gender,
          }),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.success) {
        // localStorage.setItem("token", null);
        localStorage.setItem("token", json.userToken);
        navigate("/");
        closeRef.current.click();
        alert("You Created Your Account Successfully!");
      } else {
        alert("Invalid Details!");
      }
    } else {
      alert("Please keep your password same as password and confirm password.");
    }

    // console.log(credentials)
    // navigate("/");
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const onChangeGender = (event, value) => {
    setCredentials({ ...credentials, [event.target.name]: value });
  };

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
                style={{ marginLeft: "28%", fontSize: "22px", color: "red" }}
              >
                Create Your Account
              </p>
              <form onSubmit={handleClick}>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your First and Last Name"
                  onChange={onChange}
                  value={credentials.name}
                  minLength={3}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your Username"
                  onChange={onChange}
                  value={credentials.username}
                  minLength={3}
                  required
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your Email"
                  onChange={onChange}
                  value={credentials.email}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  id="password"
                  name="password"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Your Password"
                  onChange={onChange}
                  value={credentials.password}
                  minLength={5}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  id="cpassword"
                  name="cpassword"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Confirm your Password"
                  onChange={onChange}
                  value={credentials.cpassword}
                  minLength={5}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  id="contact"
                  name="contact"
                  style={{
                    marginLeft: "7%",
                    width: "86%",
                    backgroundColor:
                      props.mode === "dark" ? "#000000ab" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                  placeholder="Enter Your Contact No."
                  onChange={onChange}
                  value={credentials.contact}
                  minLength={7}
                  required
                />

                <div
                  className="mb-3"
                  style={{ display: "flex", marginLeft: "7%" }}
                >
                  <div className="form-check" style={{ marginLeft: "20%" }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="Male"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        onChangeGender(e, "Male");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                      name="gender"
                      id="Male"
                      style={{ cursor: "pointer" }}
                      // onClick={()=>{onChangeGender('Male')}}
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check mx-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="Female"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        onChangeGender(e, "Female");
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                      name="name"
                      id="Female"
                      style={{ cursor: "pointer" }}
                      // onClick={()=>{onChangeGender('Female')}}
                    >
                      Female
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger mb-1"
                  style={{ marginLeft: "13%", width: "74%" }}
                >
                  Create Account
                </button>
              </form>
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

export default Signup;
