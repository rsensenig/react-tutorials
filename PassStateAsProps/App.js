// import React and the useState hook, which will allow me to access and manipulate the state of the current component
import React, { useState } from "react";
// import a Player component
import Player from "./components/Player/Player";
// import the CSS file used for styling
import "./styles.css";

export default function App() {
    // initialize a piece of state in a variable named players and a function setPlayers to update it later
    const [players, setPlayers] = useState([
    // an array that consists of a series of children components
        {
      name: "LaMarcus Aldridge",
      yearsPro: 14,
      position: "Center-Forward"
    },
    {
      name: "Marco Belinelli",
      yearsPro: 13,
      position: "Guard"
    },
    {
      name: "DeMar DeRozan",
      yearsPro: 11,
      position: "Guard-Forward"
    }
  ]);

// Here I will be passing the state as props to each instance of Player
  const playersList = players.map(({ name, yearsPro, position }) => (
    <li key={name.replace(" ", "").toLowerCase()}>
      <Player
        // passing the players variable
        allPlayers={players}
        // passing the setPlayers function
        removePlayer={setPlayers}
        name={name}
        yearsPro={yearsPro}
        position={position}
      />
    </li>
  ));

// Display the number of list of players, which will be modified via the state
  return (
    <div className="App">
      <h1>Team Members ({players.length})</h1>
      <ul className="List">{playersList}</ul>
    </div>
  );
}