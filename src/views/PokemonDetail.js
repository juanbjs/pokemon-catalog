import React from 'react';
import { useLocation } from 'react-router-dom';

import './PokemonDetail.css';

import { PokemonFeature } from '../component';

function PokemonDetail() {
  const { state } = useLocation();
  const { pokemonSelected } = state;

  return (
    <div
      className="pokemon-detail"
    >
      <h2>{`${pokemonSelected.name}`}</h2>
      <div
        className="pokemon-detail-data"
      >
        <div
          className="pokemon-detail-data-text"
        >
          <PokemonFeature
            title="Tipo"
            feature={
              (pokemonSelected.types ? pokemonSelected.types : []).map(
                (item) => {
                  return item;
                },
              )
            }
          />
          <PokemonFeature
            title="Ataques"
            feature={
              (pokemonSelected.attacks ? pokemonSelected.attacks : []).map(
                (item) => {
                  return `${item.name}${item.text ? `, ${item.text}` : ''}`;
                },
              )
            }
          />
          <PokemonFeature
            title="Resistencia"
            feature={
              (pokemonSelected.resistances ? pokemonSelected.resistances : []).map(
                (item) => {
                  return item.type;
                },
              )
            }
          />
          <PokemonFeature
            title="Debilidad"
            feature={
              (pokemonSelected.weaknesses ? pokemonSelected.weaknesses : ['']).map(
                (item) => {
                  return item.type;
                },
              )
            }
          />
        </div>
        <div
          className="pokemon-detail-data-image"
        >
          <img
            src={pokemonSelected.imageUrl}
            alt={pokemonSelected.name}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
