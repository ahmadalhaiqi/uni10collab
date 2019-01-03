import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import App from "./components/App";
import thunk from "redux-thunk";
// import "bootstrap/dist/css/bootstrap.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
