import React from 'react';

import './search-field.styles.css';

export const SearchField = ({ handleChange, placeholder }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
