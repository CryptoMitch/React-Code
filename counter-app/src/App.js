import React, { useState } from 'react';
import './App.css';

function App() {
  
  };

  return (
    <div className="App">
      <h1>Mitch's Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
