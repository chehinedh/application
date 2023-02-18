import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "chehine", age: 23 },
    { name: "houssem", age: 26 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const switchHandler = (newName, index) => {
    setPersons(
      persons.map((person, i) => {
        if (i === index) {
          return { ...person, name: newName };
        }
        return person;
      })
    );
  };

  const nameHandler = (event, index) => {
    const newName = event.target.value;
    setPersons(
      persons.map((person, i) => {
        if (i === index) {
          return { ...person, name: newName };
        }
        return person;
      })
    );
  };

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1x solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let personsList = null;
  if (showPersons) {
    personsList = (
      <div>
        {persons.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            click={() => switchHandler("Chehine", index)}
            changed={(event) => nameHandler(event, index)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working! </p>
      <button style={style} onClick={togglePersonHandler}>
        Toggle Persons
      </button>
      {personsList}
    </div>
  );
}

export default App;
