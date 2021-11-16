import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

/* // curried function for - logger(obj,next,action)
// redux would pass obj {dispatch,getState} to logger
const logger = function () {
  return function (next) {
    return function (action) {
      // middleware code
    };
  };
}; */
// ********* another way to write curried function
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("ACTION_TYPE = ", action.type);
    // pass the flow of code to - action
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
