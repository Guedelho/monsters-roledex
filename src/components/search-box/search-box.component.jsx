import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ handleChange, placeholder, searchField }) => (
    <input
        type="search"
        className="search"
        value={searchField}
        onChange={handleChange}
        placeholder={placeholder}
    />
);
