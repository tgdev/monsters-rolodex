import { useEffect, useState } from 'react';

import { CardList } from './components/CardList/CardList';

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // fetch data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []);

  const handleChange = (e) => setSearchQuery(e.target.value);

  const filteredMonsters = monsters.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <input
        type="search"
        placeholder="Search monsters"
        onChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
