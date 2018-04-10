import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
          <div className="bar bar4" />
          <div className="bar bar5" />
        </div>
      </div>
    );
  }
}

export default App;
