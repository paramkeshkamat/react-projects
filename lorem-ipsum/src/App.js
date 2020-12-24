import React, { useState } from "react";
import Form from "./Form";
import data from "./data";

const App = () => {
  const [text, setText] = useState([]);

  const getCount = (n) => {
    if (n === 0) n = 1;
    const newText = data.filter((item, index) => {
      if (index < n) return true;
      else return false;
    });
    setText(newText);
  };

  return (
    <div className="App">
      <h1>tired of boring lorem ipsum ?</h1>
      <Form getCount={getCount} />
      <div className="paragraphs">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
