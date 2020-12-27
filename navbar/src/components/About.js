import React from "react";
import about from "../images/about.svg";

const About = () => {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <img src={about} alt="home" style={{width: 300}}/>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
