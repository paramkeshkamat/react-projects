import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <h1>Questions and Answer about login</h1>
      <div className="container">
        {questions.map((question) => {
          return <Questions key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
};

export default App;
