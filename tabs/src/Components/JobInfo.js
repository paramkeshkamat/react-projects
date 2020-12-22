import React from "react";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import "../styles/JobInfo.css";

const JobInfo = ({ jobInfo }) => {
  const { title, company, dates, duties } = jobInfo;
  return (
    <div className="JobInfo">
      <h3>{title}</h3>
      <h3 className="company">{company}</h3>
      <p className="date">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="duty">
            <DoubleArrowRoundedIcon
              style={{ color: "#2caeba", marginRight: 30 }}
            />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobInfo;
