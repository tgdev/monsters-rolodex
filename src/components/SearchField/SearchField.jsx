import React from 'react';

import './SearchField.css';

export const SearchField = ({ handleChange, placeholder }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
