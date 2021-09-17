import "./styles.css";
import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <body className="App">
          <header>
            <h1 className="header-top">Hello CodeSandbox</h1>
          </header>
          <div class="openbtn1">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav id="g-nav">
            <div id="g-nav-list">
              <ul>
                <li>
                  <Link to="/">Top</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </body>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
