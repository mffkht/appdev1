import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function WelcomeMessage({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <WelcomeMessage name="Maffia Khate" />
      <WelcomeMessage name="Euan Flyn" />
    </div>
  );
}

export default App;

