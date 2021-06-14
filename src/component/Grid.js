import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

import { PokemonTitle } from './index';

function Grid({ data }) {
  return (
    <React.Suspense>
      <div className="grid-container">
        {
          data.map(
            (item, index) => {
              const key = `list_pokemon_${index}`;
              return (
                <PokemonTitle
                  key={key}
                  className="grid-item"
                  imageUrl={item.imageUrl}
                  name={item.name}
                />
              );
            },
          )
        }
      </div>
    </React.Suspense>
  );
}

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
