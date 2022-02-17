import React from 'react';
import { Card } from '../Card/Card';

import './CardList.css';

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
