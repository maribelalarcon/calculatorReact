import "./calculator.css";
import Number from "./Number";
import Operation from "./Operation";
import Result from "./Result";
import Delete from "./Delete";
import Dot from "./Dot";
import { useState } from "react";

const Calculator = () => {
  const [operador1, setOperador1] = useState("0");
  const [operador2, setOperador2] = useState("");
  const [operation, setOperation] = useState("");
  const [replaceNext, setReplaceNext] = useState(false);

  const result = operador2 || operador1;

  const handleNumberClick = (number) => {
    if (operation == "") {
      if (operador1 === "0" || replaceNext) {
        setOperador1(number);
        setReplaceNext(false);
      } else {
        setOperador1(operador1 + number); //lo concatena porque son strings
      }
    } else {
      if (operador2 === "0") {
        setOperador2(number);
      } else {
        setOperador2(operador2 + number);
      }
    }
  };

  //coloca la operacion
  const handleOperationClick = (operation) => {
    if (operador2 !== "") {
      handleResultClick();
      setOperation(operation);
    } else if (operador1 != "") {
      setOperation(operation);
    }
  };

  const handleResultClick = () => {
    const number1 = parseFloat(operador1);
    const number2 = parseFloat(operador2);
    let result = 0;

    if (operation == "+") {
      result = number1 + number2;
    } else if (operation == "-") {
      result = number1 - number2;
    } else if (operation == "*") {
      result = number1 * number2;
    } else if (operation == "÷") {
      result = number1 / number2;
    } else if (operation == "%") {
      result = number1 / 100;
    } else if (operation == "%") {
      result = number1 / 100;
    }

    setOperador1(`${result}`);
    setOperador2("");
    setOperation("");
    setReplaceNext(true);
  };

  const handleDeleteClick = () => {
    setReplaceNext(false);
    setOperador1("0");
    setOperador2("");
    setOperation("");
  };

  const handleDotClick = () => {
    if (operation == "") {
      if (!operador1.includes(".")) {
        setOperador1(operador1 + ".");
      }
    } else {
      if (!operador2.includes(".")) {
        setOperador2(operador2 + ".");
      }
    }
  };

  return (
    <>
      <div className="title">
        <p>Calculadora</p>
      </div>
      <div className="calculadora">
        <div className="pantalla">{result}</div>

        <Delete onClick={handleDeleteClick} />
        <Operation onClick={handleOperationClick}>%</Operation>
        <Operation onClick={handleOperationClick}>÷</Operation>
        <Number onClick={handleNumberClick}>7</Number>
        <Number onClick={handleNumberClick}>8</Number>
        <Number onClick={handleNumberClick}>9</Number>
        <Operation onClick={handleOperationClick}>*</Operation>
        <Number onClick={handleNumberClick}>4</Number>
        <Number onClick={handleNumberClick}>5</Number>
        <Number onClick={handleNumberClick}>6</Number>
        <Operation onClick={handleOperationClick}>-</Operation>
        <Number onClick={handleNumberClick}>1</Number>
        <Number onClick={handleNumberClick}>2</Number>
        <Number onClick={handleNumberClick}>3</Number>
        <Operation onClick={handleOperationClick}>+</Operation>
        <Number onClick={handleNumberClick}>0</Number>
        <Dot onClick={handleDotClick} />
        <Result onClick={handleResultClick} />
      </div>
    </>
  );
};

export default Calculator;
