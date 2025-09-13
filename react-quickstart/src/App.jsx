import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Greeting() {
  return <h1>Hello, World!</h1>;
}

function UserInfo() {
  return (
    <div>
      <p>Name: Pia</p>
      <p>Role: Business Analyst</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting />
      <UserInfo />
    </div>
  );
}

export default App;
