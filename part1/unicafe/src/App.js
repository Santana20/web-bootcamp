import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <p>
    {text} = {value}
    {text === "positive" ? "%" : ""}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  let average,
    positive = 0;
  if (all > 0) {
    average = (good - bad) / all;
    positive = (good * 100) / all;
    return (
      <>
        <h2>Statistics</h2>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </>
    );
  }

  return (
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood((prev) => prev + 1);
  };
  const handleNeutral = () => {
    setNeutral((prev) => prev + 1);
  };
  const handleBad = () => {
    setBad((prev) => prev + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
