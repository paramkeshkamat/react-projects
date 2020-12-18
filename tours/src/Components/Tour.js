import React, { useState } from "react";

const Tour = (props) => {
  const [readmore, setReadmore] = useState(false);
  const { id, image, info, name, price } = props.tour;

  return (
    <div className="Tour">
      <img src={image} alt={name} />
      <div className="tour-data">
        <div className="name-price">
          <h3>{name}</h3>
          <h3 className="price">$ {price}</h3>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}... `}
          <button className="readmore-btn" onClick={() => setReadmore(!readmore)}>
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => props.removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
