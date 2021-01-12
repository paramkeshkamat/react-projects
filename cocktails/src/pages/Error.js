import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Error.css";
import error from "../images/error.svg";

const Error = () => {
  const history = useHistory();
  return (
    <div className="Error">
      <img src={error} alt={error} />
      <h2>404 Error Page!</h2>
      <p>Sorry! The Page you are searching for could not be found!</p>
      <button onClick={() => history.push("/")}>Go back to Home Page</button>
    </div>
  );
};

export default Error;
