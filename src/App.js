import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    // fetch data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      {monsters.map((monster) => (
        <p key={monster.id}>{monster.name}</p>
      ))}
    </div>
  );
}

export default App;
