import React, { useState } from "react";

const Form = ({ getCount }) => {
  const [paragraph, setParagraph] = useState(0);

  const handleChange = (e) => setParagraph(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCount(paragraph);
  };

  return (
    <div className="Form">
      <h3>Paragraphs : </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="paragraph"
          value={paragraph}
          placeholder="0"
          min="0"
          max="10"
          onChange={handleChange}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default Form;
