import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

import {
  PokemonTitle,
  PokemonDetail,
} from './index';

function Grid({ data }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [pokemonSelected, setPokemonSelected] = React.useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <React.Suspense>
      {
        pokemonSelected.name && (
          <PokemonDetail
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            pokemonSelected={pokemonSelected}
          />
        )
      }
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
                  onClick={() => {
                    openModal();
                    setPokemonSelected(item);
                  }}
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
