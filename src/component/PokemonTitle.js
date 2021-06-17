import React from 'react';

import './PokemonTitle.css';

import PropTypes from 'prop-types';

function PokemonTitle({
  className, imageUrl, name, onClick,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div
      className={className}
    >
      <div
        className="thumb"
        style={{ display: isLoaded ? 'none' : 'block' }}
      >
        <img
          alt={name}
          src="/poke_loading.gif"
        />
      </div>
      <div
        style={{ display: isLoaded ? 'block' : 'none' }}
      >
        <img
          onLoad={() => {
            setIsLoaded(true);
          }}
          src={imageUrl}
          alt={name}
        />
      </div>
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
