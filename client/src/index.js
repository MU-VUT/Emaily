import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
//For sengrid email debugging
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

// Provider for make state available to all components in App
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// console.log("stripe key is:", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is:", process.env.NODE_ENV);
