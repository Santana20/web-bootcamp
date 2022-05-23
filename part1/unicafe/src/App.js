import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {text === "positive" ? "%" : ""}
    </td>
  </tr>
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
        <table>
          <thead>
            <tr>
              <th>
                <h1>Statistics</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </>
  );
};

const Button = ({ text, functionHandled }) => {
  return <button onClick={functionHandled}>{text}</button>;
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
      <Button text="good" functionHandled={handleGood} />
      <Button text="neutral" functionHandled={handleNeutral} />
      <Button text="bad" functionHandled={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
