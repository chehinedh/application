import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [person1, setPerson1] = useState({ nom: "chehine", age: "23" });
  const [person2, setPerson2] = useState({ nom: "houssem", age: "26" });

  const switchHandler = (newName, person) => {
    if (person === 1) {
      setPerson1({ ...person1, nom: newName });
    } else {
      setPerson2({ ...person2, nom: newName });
    }
  };

  const nameHandler = (event) => {
    setPerson1({ ...person1, nom: event.target.value });
    //setPerson2({ ...person2, nom: "Houssem" });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working! </p>
      <button onClick={() => switchHandler("Chehine", 1)}>Switch Name</button>
      <Person
        name={person1.nom}
        age={person1.age}
        click={() => switchHandler("Chehine", 1)}
        changed={nameHandler}
      >
        My Hobbies: Boxing
      </Person>
      <Person
        name={person2.nom}
        age={person2.age}
        click={() => switchHandler("Houssem", 2)}
      />
    </div>
  );
}

export default App;
