import React from "react";
import home from "../images/home.svg";

const Home = () => {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <img src={home} alt="home" style={{width: 300}}/>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
