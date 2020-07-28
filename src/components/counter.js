import React from "react";

function Counter({ value, onIncrement, onDecrement }) {
  console.log(value);
  return (
    <div>
      Clicked: {value} times <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Counter;
