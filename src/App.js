import "./index.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  let cars = [
    {
      name: "ferrari",
      color: "yellow",
    },
    {
      name: "ferrari",
      color: "red",
    },
    {
      name: "lambo",
      color: "blue",
    },
    {
      name: "ford",
      color: "green",
    },
    {
      name: "fiat",
      color: "pink",
    },
    {
      name: "honda",
      color: "purple",
    },
  ];

  console.log(input);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div className="resultsContainer">
        {cars
          .filter((item) => {
            return item.name.includes(input);
          })
          .map((result) => {
            return (
              <>
                <h1>{result.name}</h1>
                <h3>{result.color}</h3>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
