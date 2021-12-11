// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home.jsx";
import Page1 from "./pages/page1.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react" : "/"}>
        <div>
          <div>header</div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/page1" exact component={Page1}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
