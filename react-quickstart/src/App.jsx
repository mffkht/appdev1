import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
     
      <ul>
        <li>Reading</li>
        <li>Watching Anime</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <AboutMe />
    </div>
  );
}

export default App;

