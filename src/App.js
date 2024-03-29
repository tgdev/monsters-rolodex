import { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // fetch data on app mount
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters));
  }, []);

  const onSearchChange = (e) =>
    setSearchQuery(e.target.value.toLocaleLowerCase());

  const filteredMonsters = monsters.filter((m) =>
    m.name.toLowerCase().includes(searchQuery),
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchField
        handleChange={onSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
