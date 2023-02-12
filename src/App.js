import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working! </p>
      <Person name="chehine" age="23"  ></Person>
      <Person name="houssem" age="26" />
    </div>
  );
}

export default App;
