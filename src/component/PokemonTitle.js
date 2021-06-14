import React from 'react';

import PropTypes from 'prop-types';

function PokemonTitle({ className, imageUrl, name }) {
  return (
    <div
      className={className}
    >
      <img
        src={imageUrl}
        alt="logo"
      />
      <p>{`${name}`}</p>
    </div>
  );
}

PokemonTitle.propTypes = {
  className: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonTitle;
