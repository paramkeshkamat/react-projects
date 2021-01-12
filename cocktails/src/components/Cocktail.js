import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Cocktail.css";

const Cocktail = ({ id, name, image, info, glass }) => {
  const history = useHistory();
  return (
    <div className="Cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="info-container">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <button onClick={() => history.push(`/cocktails/${id}`)}>details</button>
      </div>
    </div>
  );
};

export default Cocktail;
