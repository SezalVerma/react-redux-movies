import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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
    if (typeof action !== "function") {
      console.log("ACTION_TYPE = ", action.type);
    }
    // pass the flow of code to - action
    next(action);
  };

/* ********* Thunk used to call action creators that return a function rather than an object
 const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      // call action func passing it dispatch
      action(dispatch);
      return;
    }
    next(action);
  }; */

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  // App component & all its descendants have access to store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
