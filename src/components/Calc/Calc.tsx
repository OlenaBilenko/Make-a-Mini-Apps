import { useEffect, useState } from "react";
import "./Calc.css";

const Calc = () => {
  const [screen, setScreen] = useState("");

  const handleClick = (e) => {
    const targetValue = e.target.value;
    setScreen(screen + targetValue);
  };

  const signHandleClick = (e) => {
    const targetValue = e.target.value;
    setScreen(screen + targetValue);
  };

  const clearScreen = () => {
    console.log("Clear screen");
    setScreen("");
  };

  const equalsHandleClick = () => {
    const result = eval(screen.replace("x", "*"));
    setScreen(result);
  };

  return (
    <div className="calc-content">
      <div className="calc-header">Calculator</div>
      <div className="calc-body">
        <input
          type="text"
          value={screen}
          className="calc-screen"
          placeholder="0"
        />
        <div className="calc-numbers">
          <button
            className="calc-button button"
            value="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="calc-button button"
            value="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="calc-button button"
            value="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="calc-button button sign-button"
            value="/"
            onClick={signHandleClick}
          >
            /
          </button>
          <button
            className="calc-button button"
            value="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="calc-button button"
            value="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="calc-button button"
            value="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="calc-button button sign-button"
            value="x"
            onClick={signHandleClick}
          >
            x
          </button>
          <button
            className="calc-button button"
            value="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="calc-button button"
            value="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="calc-button button"
            value="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="calc-button button sign-button"
            value="-"
            onClick={signHandleClick}
          >
            —
          </button>
          <button
            className="calc-button button reset-button"
            onClick={clearScreen}
          >
            C
          </button>
          <button
            className="calc-button button"
            value="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="calc-button button equals-button"
            onClick={equalsHandleClick}
          >
            =
          </button>
          <button
            className="calc-button button sign-button"
            value="+"
            onClick={signHandleClick}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
