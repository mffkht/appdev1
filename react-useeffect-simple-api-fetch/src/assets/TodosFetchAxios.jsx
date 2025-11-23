// src/TodosFetchAxios.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching todos");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading todos...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Todos (Axios)</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p><b>Title:</b> {todo.title}</p>
          <p><b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
