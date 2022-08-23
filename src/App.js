import "./App.css";
import { useState } from "react";
function App() {
  const [firstOperand, setFirstOperand] = useState("0");
  const [secondOperand, setSecondOperand] = useState("0");
  const [operator, setOperator] = useState("");

  const clear = (event) => {
    if (event.target.value === "c") {
      setSecondOperand("0");
    } else if (event.target.value === "ac") {
      setFirstOperand("0");
      setSecondOperand("0");
    }
  };
  const handleOperator = (event) => {
    setOperator(event.target.value);
    setFirstOperand(secondOperand + event.target.value);
    setSecondOperand("0");
  };
  const handleNumber = (event) => {
    if (secondOperand === "0") {
      setSecondOperand(event.target.value);
    } else {
      setSecondOperand(secondOperand + event.target.value);
    }
  };
  const handleEqual = () => {
    let result = 0;
    if (operator === "+") {
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === "-") {
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === "*") {
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (operator === "/") {
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
    } else if (operator === "%") {
      result = parseFloat(firstOperand) % parseFloat(secondOperand);
    }

    setFirstOperand("0");
    setSecondOperand(result);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="calculator-display">
          <input
            className="first-operand"
            value={firstOperand}
            type="text"
            disabled="true"
          />
          <input
            className="second-operand"
            value={secondOperand}
            type="text"
            disabled="true"
          />
        </div>
        <div className="calculator-keypad">
          <button onClick={clear} value="ac">
            AC
          </button>
          <button onClick={clear} value="c">
            C
          </button>
          <button onClick={handleOperator} value="%">
            %
          </button>
          <button onClick={handleOperator} value="/">
            ÷
          </button>
          <button onClick={handleNumber} value="7">
            7
          </button>
          <button onClick={handleNumber} value="8">
            8
          </button>
          <button onClick={handleNumber} value="9">
            9
          </button>
          <button onClick={handleOperator} value="*">
            x
          </button>
          <button onClick={handleNumber} value="4">
            4
          </button>
          <button onClick={handleNumber} value="5">
            5
          </button>
          <button onClick={handleNumber} value="6">
            6
          </button>
          <button onClick={handleOperator} value="-">
            -
          </button>
          <button onClick={handleNumber} value="1">
            1
          </button>
          <button onClick={handleNumber} value="2">
            2
          </button>
          <button onClick={handleNumber} value="3">
            3
          </button>
          <button onClick={handleOperator} value="+">
            +
          </button>
          <button onClick={handleNumber} value="0">
            0
          </button>
          <button onClick={handleNumber} value=".">
            .
          </button>
          <button className="equal" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
