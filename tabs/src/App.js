import React, { useEffect, useState } from "react";
import JobInfo from "./Components/JobInfo";
import Loading from "./Components/Loading";
import Button from "./Components/Button";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h1>Experience</h1>
      <div className="main">
        <Button buttons={jobs} changeValue={changeValue} value={value} />
        <JobInfo jobInfo={jobs[value]} />
      </div>
      <button className="btn">more info</button>
    </div>
  );
};

export default App;
