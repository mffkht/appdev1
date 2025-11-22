import { useState, useEffect } from "react";

export default function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </p>
      ))}
    </div>
  );
}
