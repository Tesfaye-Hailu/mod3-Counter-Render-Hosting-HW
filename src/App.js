import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [counter, setCounter] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Simple React App</h1>
      <p>Counter: {counter}</p>
      <p>Date and Time: {dateTime.toString()}</p>
      {/* <button onClick={handleClick}>Increment</button> */}
      <button className="custom-button" onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;

