import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="App">
      <h1>{people.length} birthdays today</h1>
      <List people={people} />
      <button onClick={() => setPeople([])} className="btn">
        Clear All
      </button>
    </div>
  );
};

export default App;
