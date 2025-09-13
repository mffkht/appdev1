import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, Maffia Khate!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;



