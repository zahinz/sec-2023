import { useState } from "react";
import "./App.css";

function App() {
  // update h1 with increment of 1
  const [number, setNumber] = useState(0);
  // press button to console log error
  function handleButtonClick() {
    setNumber(number + 1);
  }

  return (
    <div className="background">
      <div>
        <h1>{number}</h1>
      </div>
      <div>
        <button onClick={handleButtonClick}>-10</button>
        <button onClick={handleButtonClick}>-1</button>
        <button onClick={handleButtonClick}>+1</button>
        <button onClick={handleButtonClick}>+10</button>
      </div>
    </div>
  );
}

export default App;
