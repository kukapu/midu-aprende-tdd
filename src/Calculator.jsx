import { useState } from "react";
import { evaluate } from "mathjs";

export const numbers = [0,1,2,3,4,5,6,7,8,9];

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ["+", "-", "*", "/"];
export const equalSign = "=";


export const Calculator = () => {

  const [value, setValue] = useState("");
  const [hasResult, setHasResult] = useState(false);

  const handlerNumber = num => {
    return () => {
      if (hasResult) {
        setValue(String(num));
        setHasResult(false);
      } else {
        setValue(value.concat(String(num)));
      }
    };
  }


  const handlerOperation = operation => {
    return () => {
      setValue(String(value).concat(operation));
      if (hasResult) setHasResult(false);
    }
  }


  const handleEqual = () => {
    setValue(String(evaluate(value)));
    setHasResult(true);
  }

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role="grid">
        {
          rows.map((row,idx) => (
            <div key={idx} role='row'>
              {
                row.map(number => (
                  <button 
                    onClick={ handlerNumber(number) } 
                    key={number}
                  >
                    { number }
                  </button>
                )) 
              }
            </div>
          ))
        }
        {
          operations.map(operation => (
            <button 
              onClick={ handlerOperation( operation ) } 
              key={operation}
            >
              { operation }
            </button>
          ))
        }
        <button onClick={ handleEqual }>{ equalSign }</button>
        <button onClick={ () => setValue('') }> AC </button>
      </div>
    </section>
  );
}
