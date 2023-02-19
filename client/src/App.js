import React, { useState, useEffect } from "react";
import "./App.css";
import {Login} from "./login";
import {Register} from "./register";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3003/message")
      .then((res) => res.json())
      .then((data) => {
        console.log("Received data:", data);
        setMessage(data.message);
      })
      .catch((error) => console.error("Error fetching message:", error));
  }, []);
  

  return (
    <div className="App">
      <h1>{message}</h1>
      <Login/>
    </div>


  );
}

export default App