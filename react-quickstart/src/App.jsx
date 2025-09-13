import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserInfo() {
  const name = "Maffia Khate";
  const age = 19;
  const hobbies = ["Watching Anime", "Reading", "Sleeping"];

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

export default App;


