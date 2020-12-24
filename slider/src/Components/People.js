import React, { useState, useEffect } from "react";
import Person from "./Person";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import data from "../data";
import "../styles/People.css";

const People = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="People">
      <div className="section">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (index === personIndex) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return <Person key={person.id} person={person} position={position} />;
        })}

        <button className="btn prev" onClick={() => setIndex(index - 1)}>
          <ChevronLeftIcon />
        </button>
        <button className="btn next" onClick={() => setIndex(index + 1)}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default People;
