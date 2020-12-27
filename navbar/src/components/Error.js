import React from "react";
import { useHistory } from "react-router-dom";
import error from "../images/error.svg";

const Error = () => {
  let history = useHistory();
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <img src={error} alt="home" style={{ width: 300 }} />
      <h1>Oops! Page not found!</h1>
      <button className="error-btn" onClick={() => history.push("/")}>Back to Home Page</button>
    </div>
  );
};

export default Error;
