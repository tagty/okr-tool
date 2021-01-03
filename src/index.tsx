import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import New from "./new";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 60px;

  .ant-breadcrumb {
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 10px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/new" component={New} />
          <Route path="/" component={App} />
        </Switch>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
