import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("Change to blue");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const className = isBtnDisabled ? "gray" : color;
  const handleBtnClick = () => {
    setColor(color === "red" ? "blue" : "red");
    setText(text === "Change to blue" ? "Change to red" : "Change to blue");
  };
  const handleCheckboxClick = () => {
    setIsBtnDisabled((prev) => !prev);

    
  };
  return (
    <div>
      <div>
        <button
          className={className}
          onClick={handleBtnClick}
          disabled={isBtnDisabled}
        >
          {text}
        </button>
        <input type="checkbox" onClick={handleCheckboxClick} />
      </div>
    </div>
  );
}

export default App;
