import { useState } from "react";
import "./App.scss";

function App() {
  const [result, setResult] = useState(""); // State to store the calculation result
  const [input, setInput] = useState(""); // State to store user input

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
      setInput("");
    } else if (value === "C") {
      setResult("");
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];
  const ff = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="Calculator">
      <input className="display" type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((row, rowIndex) =>
          row.map((buttonValue, index) => (
            <button onClick={() => handleClick(buttonValue)}>
              {buttonValue}
            </button>
          ))
        )}
      </div>
      <div className="result">{result}</div>
    </div>
  );
}
export default App;
