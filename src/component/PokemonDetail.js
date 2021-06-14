import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

function Types({ types }) {
  if (!types) {
    return null;
  }

  return (
    <div>
      <h3>Tipo</h3>
      {
        types.map(
          (item, index) => {
            const key = `pokemon_type_${index}`;
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

Types.propTypes = {
  types: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function Attacks({ attacks }) {
  if (!attacks) {
    return null;
  }

  return (
    <div>
      <h3>Ataques</h3>
      {
        attacks.map(
          (item, index) => {
            const key = `pokemon_attack_${index}`;
            return (
              <p
                key={key}
              >
                {`- ${item.name}${item.text ? `, ${item.text}` : ''}`}
              </p>
            );
          },
        )
      }
    </div>
  );
}

Attacks.propTypes = {
  attacks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function Resistances({ resistances }) {
  if (!resistances) {
    return null;
  }

  return (
    <div>
      <h3>Resistencia</h3>
      {
        resistances.map(
          (item, index) => {
            const key = `pokemon_resistance_${index}`;
            return (
              <p
                key={key}
              >
                {`- ${item.type}`}
              </p>
            );
          },
        )
      }
    </div>
  );
}

Resistances.propTypes = {
  resistances: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function Weaknesses({ weaknesses }) {
  if (!weaknesses) {
    return null;
  }

  return (
    <div>
      <h3>Debilidad</h3>
      {
        weaknesses.map(
          (item, index) => {
            const key = `pokemon_weakness_${index}`;
            return (
              <p
                key={key}
              >
                {`- ${item.type}`}
              </p>
            );
          },
        )
      }
    </div>
  );
}

Weaknesses.propTypes = {
  weaknesses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function PokemonDetail({ modalIsOpen, closeModal, pokemonSelected }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalle de Pokemon"
      >
        <h2>{`${pokemonSelected.name}`}</h2>
        <Types
          types={pokemonSelected.types}
        />
        <Attacks
          attacks={pokemonSelected.attacks}
        />
        <Resistances
          resistances={pokemonSelected.resistances}
        />
        <Weaknesses
          weaknesses={pokemonSelected.weaknesses}
        />
      </Modal>
    </div>
  );
}

PokemonDetail.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  pokemonSelected: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PokemonDetail;
