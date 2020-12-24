import React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import "../styles/Person.css";

const Person = ({ person, position }) => {
  const { image, name, title, quote } = person;
  return (
    <div className={`${position} Person`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{quote}</p>
      <FormatQuoteIcon className="icon" />
    </div>
  );
};

export default Person;
