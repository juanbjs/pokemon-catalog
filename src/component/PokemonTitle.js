import React from 'react';

import './PokemonTitle.css';

import PropTypes from 'prop-types';

function PokemonTitle({
  className, imageUrl, name, onClick,
}) {
  return (
    <div
      className={className}
    >
      <img
        src={imageUrl}
        alt="logo"
      />
      <p
        className="title"
      >
        {`${name}`}
      </p>
      <button
        type="button"
        onClick={() => onClick()}
      >
        Ver Detalle
      </button>
    </div>
  );
}

PokemonTitle.propTypes = {
  className: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PokemonTitle;
