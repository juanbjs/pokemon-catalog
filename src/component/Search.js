import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

function Search({ onChange, value }) {
  return (
    <div className="root">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="input"
        placeholder="Buscar por nombre, artista, serie"
      />
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
