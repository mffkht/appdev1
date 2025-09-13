import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoList() {
  const tasks = ["Learn React", "Practice Coding", "Read a Book", "Watching Anime", "Gaming"];

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>  
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;



