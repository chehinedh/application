import React, { useState } from "react";
import Styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const StyledButton = Styled.button` 
    background-color: ${(props) => (props.alt ? "red" : "green")};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
      color: black
      }
  `;

function App() {
  const [persons, setPersons] = useState([
    { id: "1", name: "chehine", age: 23 },
    { id: "2", name: "houssem", age: 26 },
    { id: "3", name: "rayen", age: 24 },
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const deletePersonHandler = (index) => {
    setPersons((persons) => {
      const newPersons = [...persons];
      newPersons.splice(index, 1);
      return newPersons;
    });
  };

  const nameHandler = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex],
      name: event.target.value,
    };

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    setPersons(newPersons);
  };

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  };

  // const style = {
  //   backgroundColor: "green",
  //   color: "white",
  //   font: "inherit",
  //   border: "1x solid blue",
  //   padding: "8px",
  //   cursor: "pointer",
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // };

  let personsList = null;
  if (showPersons) {
    personsList = (
      <div>
        {persons.map((person, index) => (
          <ErrorBoundary key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => nameHandler(event, person.id)}
              click={() => deletePersonHandler(index)}
            />
          </ErrorBoundary>
        ))}
      </div>
    );

    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'lightred',
    //   color: 'black'
    // };
  }

  let classes = [];
  if (persons.length <= 2) {
    classes.push("red"); // classes = ['red']
  }
  if (persons.length <= 1) {
    classes.push("bold"); // classes = ['red','bold']
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <StyledButton alt={setShowPersons} onClick={togglePersonHandler}>
        Toggle Persons
      </StyledButton>
      {personsList}
    </div>
  );
}

export default App;
