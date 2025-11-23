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
        setError("Failed to fetch todos");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading todos...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.title} - {todo.completed ? "✔ Completed" : "❌ Not Completed"}
        </p>
      ))}
    </div>
  );
}
