import React, { useEffect } from "react";
import "../styles/Alert.css";

const Alert = ({ msg, type, list, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 1500);
    return () => clearTimeout(timeOut);
  }, [list, removeAlert]);

  return <p className={`Alert Alert-${type}`}>{msg}</p>;
};

export default Alert;
