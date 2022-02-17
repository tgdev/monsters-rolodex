import React from 'react';

import './CardList.css';

export const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => (
            <p key={monster.id}>{monster.name}</p>
        )
      )}
    </div>
);