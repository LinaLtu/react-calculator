import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonPanel from "./Components/ButtonPanel.js";
import Display from "./Components/Display.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
          <Display />
          <ButtonPanel />
        </header>
      </div>
    );
  }
}

export default App;
