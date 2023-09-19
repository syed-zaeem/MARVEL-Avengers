import React, { useState, useEffect } from "react";
import Characters_ListItems from "./Characters_ListItems";
import "../Characters.css";
// import { LoadingContext } from './LoadingContext';
import { Outlet, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import MoonLoader from "react-spinners/MoonLoader";

export default function Characters(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("Token is present.", localStorage.getItem("token"));
      const timer = setTimeout(() => {
        setLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    } else {
      console.log(
        "Token is null. Please add token for data. Redirect to login page to add token.",
        localStorage.getItem("token")
      );
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loading) {
      props.setProgress(50);
    } else {
      props.setProgress(100);
    }
  }, [loading, props.setProgress]);

  if (loading) {
    return (
      <div>
        <LoadingBar height={3} color="#f11946" progress={50} />
        <h1>Loading Characters...</h1>
        <div style={{ marginLeft: "45%", marginTop: "130px" }}>
          <MoonLoader color="red" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex">
        <Characters_ListItems mode={props.mode} />
        <Outlet />
      </div>
    </>
  );
}
