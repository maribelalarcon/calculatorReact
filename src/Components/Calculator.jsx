import Number from "./Number";
import Calculator from "./Number copy";
import Operation from "./Operation";
import { useState } from "react";

function Calculator  () {
    const onButtonClick = (number) => () =>{
        onClick(number)
    }
        
      const onOperationClick = (operation) => {
        onClick(operation)
    
      }
    const [operador1, setOperador1] = useState(0)
    const [operador2, setOperador2] = useState("")
    const [operation, setOperation] = useState("")
    const [result, setResult] = useState("0")

    let inputNum = e.target.value;

    function handleChange(e) {
        if(operation == ""){
            if(operador1 === "0"){
                setOperador1(inputNum)   
            }else {
                setOperador1(operador1 + 1)
            } 
            setOperador1(operador1)
        }
         else {
            if(operador2 === "0"){
             setOperador2(inputNum)
            }else {
                setOperador2(operador2 + 1)}
                setOperador2(operador2)
        }
    }

    function clear(){
        setOperador1(0);
        setOperador2 = "";
        operation = "";
        inputNum = setOperador1
    }

    function porcentage(){
        setOperador1(operador1 / 100);
    }

    function operation(e){
        let operationInput = e.target.value;
        setOperation(operationInput);
        setOperador2(operador1);
        setOperador1(0); 
    }

    function calculate() {
        if (operation === "/") {
          setOperador2(parseFloat(operador1) / parseFloat(operador2));
        } else if (operation === "X") {
          setOperador2(parseFloat(operador1) * parseFloat(operador2));
        } else if (operation === "-") {
            console.log(operador1)
            console.log(operador2)
            console.log(operador1-operador2)
          setOperador2(parseFloat(operador1) - parseFloat(operador2));
        } else if (operation === "+") {
          setOperador2(parseFloat(operador1) + parseFloat(operador2));
        }
    }

    
    return(
        
    <div>
    <input className="result">{num}</input>
      <Operation onClick={onOperationClick} operation={"/"}/>
      <Number onClick={onButtonClick} value={7}/>
      <Number onClick={onButtonClick} value={8}/>
      <Number onClick={onButtonClick} value={9}/>
      <Operation onClick={onOperationClick} operation={"÷"}/>
      <Number onClick={onButtonClick} value={4}/>
      <Number onClick={onButtonClick} value={5}/>
      <Number onClick={onButtonClick} value={6}/>
      <Operation onClick={onOperationClick} operation={"-"}/>
      <Number onClick={onButtonClick} value={1}/>
      <Number onClick={onButtonClick} value={2}/>
      <Number onClick={onButtonClick} value={3}/>
      <Operation onClick={onOperationClick} operation={"+"}/>
      <Number onClick={onButtonClick} value={0} />
      <Operation onClick={onOperationClick} operation="." />
      <Result onClick={calculate}/>

    </div>
  
  
  )


        
         
        
}
export default Calculator
