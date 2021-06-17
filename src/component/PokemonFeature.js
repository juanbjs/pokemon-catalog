import React from 'react';

import './PokemonTitle.css';

import PropTypes from 'prop-types';

function PokemonFeature({ title, feature }) {
  return (
    <div>
      <h3>{title}</h3>
      {
        feature.map(
          (item, index) => {
            const key = `pokemon_feature_${index}`;
            return (
              <p
                key={key}
              >
                {`- ${item}`}
              </p>
            );
          },
        )
      }
    </div>
  );
}

PokemonFeature.propTypes = {
  title: PropTypes.string.isRequired,
  feature: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PokemonFeature;
