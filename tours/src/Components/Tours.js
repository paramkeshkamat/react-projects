import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const tours = props.tours;
  return (
    <div className="Tours">
      <h1>Our Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={props.removeTour} />;
      })}
    </div>
  );
};

export default Tours;
