import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";


function App()  {
  const [person1, setPerson1] = useState({ nom: "chehine", age: "23" });
  const [person2, setPerson2] = useState({ nom: "houssem", age: "26" });

  const switchHandler = () => {
    console.log('was clicked!');
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working! </p>
      <button onClick={switchHandler}>Switch Name</button>
      <Person name={person1.nom} age={person1.age}>
        My Hobbies: Boxing
      </Person>
      <Person name={person2.nom} age={person2.age} />
    </div>
  );
}

export default App;
