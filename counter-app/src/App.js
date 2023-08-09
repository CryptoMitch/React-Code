import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Mitch's Counter App</h1>
      <p className="counter">Current Count: {count}</p>
      <div className='button-container'>
        <button className="button" onClick={increment}><span className="keyline"></span>+1</button>
        <button className="button secondary" onClick={decrement}><span className="keyline"></span>-1</button>
      </div>
    </div>
  );
}

export default App;
