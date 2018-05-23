import React from "react";
import Header from "../components/Header";

import "normalize.css";
import "./index.css";

import store from "../Store";
import { Provider } from "react-redux";

import Container from "../components/Container";

import Questions from "../components/Application/Questions/";
import ActiveQuestion from "../components/Application/ActiveQuestion";

export default () => (
  <div>
    <Provider store={store}>
      <div>
        <Header />
        <Questions />
        <Container>
          <ActiveQuestion />
        </Container>
      </div>
    </Provider>
  </div>
);
