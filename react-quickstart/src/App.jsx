import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ButtonClick() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <div>
      <h2>Click the Button</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ButtonClick />
    </div>
  );
}

export default App;



