import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./styles/Questions.css";

const Questions = (props) => {
  const { title, info } = props.question;
  const [show, setShow] = useState(false);
  return (
    <div className="Question">
      <div className="title">
        <h3>{title}</h3>
        <button className="btn" onClick={() => setShow(!show)}>
            <RemoveIcon style={{ fontSize: 16 }} />
          ) : (
            <AddIcon style={{ fontSize: 16 }} />
          )}
        </button>
      </div>
      <p>{show && info}</p>
    </div>
  );
};

export default Questions;
