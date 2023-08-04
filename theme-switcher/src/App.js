import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const themeStyles = {
    light: {
      backgroundColor: '#F1F1F1',
      color: '#0F3D3E',
    },
    dark: {
      backgroundColor: '#100F0F',
      color: '#f4f4f4',
    },
  };

  return (
    <div className="app" style={themeStyles[theme]}>
      <header>
        <h1>My Unique React App</h1>
        <button onClick={toggleTheme} className="theme-switcher">
          Toggle Theme
        </button>
      </header>
      <main>
        <p>Welcome to my unique React app! Play around with the theme switcher to change from dark mode to light mode.</p>
      </main>
    </div>
  );
}

export default App;