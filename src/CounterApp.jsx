import { useState } from "react";
import PropTypes from "prop-types";

export function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);
  const addNumber = () => {
    setCounter(counter + 1);
    // setCounter((c)=> c+1);
  };
  const substractNumber = () => {
    setCounter(counter - 1);
    // setCounter((c)=> c+1);
  };
  const resetNumber = () => {
    setCounter(value);
    // setCounter((c)=> c+1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={addNumber}>+1</button>
      <button onClick={substractNumber}>-1</button>
      <button aria-label="button-reset" onClick={resetNumber}>
        reset
      </button>
    </>
  );
}

CounterApp.PropTypes = {
  value: PropTypes.number.isRequired, //Genera error que bloquea codigo
};
