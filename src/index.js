import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./modules/index";

// axios.defaults.baseURL = "http://15.164.227.114/web/src/php/get_info.php?comment=1";
axios.defaults.baseURL = "https://api.on-startup.co.kr/";

// refreshToken cookie를 주고받을 수 있다.
// axios.defaults.withCredentials = true;

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSIOM__ && window.__REDUX_DEVTOOLS_EXTENSIOM__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
