import React, { useState } from "react";
import people from "./data";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./styles/Review.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const prevReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="Review">
      <div className="image-container">
        <img src={image} alt={name} />
        <span>
          <FormatQuoteRoundedIcon style={{ fontSize: 27 }} />
        </span>
      </div>
      <h3>{name}</h3>
      <p className="job">{job}</p>
      <p>{text}</p>
      <div className="navigation-btn">
        <button onClick={prevReview}>
          <NavigateBeforeIcon />
        </button>
        <button onClick={nextReview}>
          <NavigateNextIcon />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        random user
      </button>
    </div>
  );
};

export default Review;
