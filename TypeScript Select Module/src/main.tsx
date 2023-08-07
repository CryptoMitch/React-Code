import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


// Render out the app as the root of the DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
