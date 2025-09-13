import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProfileCard() {
  const cardStyle = {
    backgroundColor: "#ffe6f2", // light pastel pink
    padding: "24px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "280px",
    margin: "40px auto",
    fontFamily: "'Comic Sans MS', 'Poppins', sans-serif",
  };

  const nameStyle = {
    color: "#ff66b2", // cute pink
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const roleStyle = {
    color: "#666",
    fontSize: "16px",
    marginTop: "0",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "12px",
    border: "3px solid #ffb3d9",
  };

  return (
    <div style={cardStyle}>
     
      <h2 style={nameStyle}>🌸 Maffia Khate 🌸</h2>
      <p style={roleStyle}>✨ Business Analyst ✨</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export default App;


