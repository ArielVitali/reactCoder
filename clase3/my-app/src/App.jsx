import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Item from "./item.jsx";

const frutas = ["Pera", "Manzanas", "Sandias"];

function App() {
  const handleClick = () => {
    alert("Bye World");
  };

  return (
    <div className="App">
      <h1>Hi world!</h1>
      <button onClick={handleClick}>Show Message</button>
      <ul>
        {frutas.map((fruta, i) => (
          <Item key={i} fruta={fruta}></Item>
        ))}
      </ul>
    </div>
  );
}

export default App;
