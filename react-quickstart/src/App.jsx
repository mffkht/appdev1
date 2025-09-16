import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
import { useState } from "react";
import './App.css';

function App() {
  // create state variable "count" with default value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Add</button>
      <button onClick={() => setCount(count - 1)}>- Subtract</button>
    </div>
  );
}

export default App;
