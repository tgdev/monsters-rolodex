import React from 'react';

import './card.styles.css';

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      alt="monster avatar"
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
