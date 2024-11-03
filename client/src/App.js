import logo from './logo.svg';
import './App.css';

// client/src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>React and Node Setup</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
