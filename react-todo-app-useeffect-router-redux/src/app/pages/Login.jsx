import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;

  // Fetch sample users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=2")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  function handleLogin() {
    const foundUser = users.find((user) => user.username === username);

    if (!foundUser) {
      alert("Username not found!");
      return;
    }

    if (password !== SECRET) {
      alert("Incorrect password!");
      return;
    }

    // Save logged-in user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    window.location.href = "/todos";
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "1rem" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: 8 }}>
        <label>
          Username:<br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </label>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>
          Password:<br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
