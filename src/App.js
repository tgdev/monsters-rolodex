import { useEffect, useState } from "react";

import { CardList } from "./components/CardList/CardList";

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
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
