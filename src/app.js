import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store/";

console.log(store.getState());

import Router from "./routes/router";

import DefaultLayout from "./layouts/default";

import "normalize.css";
import classNames from "./app.css";

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={classNames.App}>
        <DefaultLayout>
          <Router />
        </DefaultLayout>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <App title={"React starter"} />,
  document.getElementById("app")
);
