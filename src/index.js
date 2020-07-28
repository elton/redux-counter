import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/counter";
import counter from "./reducers";
import { createStore } from "redux";

const store = createStore(counter);

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />, // 组建的参数是以对象方式传递的，所以counter函数的形参需要以counter({value, onIncrement, onDecrement})的方式书写。
    document.getElementById("root")
  );

render();
store.subscribe(render);
