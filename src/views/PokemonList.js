import React from 'react';

import { useHistory, Link } from 'react-router-dom';

import { getPokemonCatalog } from '../service';

import {
  Loading,
  Grid,
  GridItem,
  Search,
  Divider,
  PokemonTitle,
  Breadcrumb,
} from '../component';

function applyFilters(services, query) {
  return services.filter((service) => {
    let matches = true;

    if (query) {
      const properties = ['name', 'artist', 'series'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (service[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
}

function PokemonList() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const history = useHistory();

  const filteresData = applyFilters(data, searchValue);

  React.useEffect(
    () => {
      setLoading(true);
      getPokemonCatalog()
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    },
    [],
  );

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <Breadcrumb>
        <Link to="/" replace>
          Inicio
        </Link>
      </Breadcrumb>
      <Search
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <Divider />
      <Grid>
        {
            (filteresData.length > 0 ? filteresData : data).map(
              (item, index) => {
                const key = `list_pokemon_${index}`;

                return (
                  <GridItem
                    key={key}
                  >
                    <PokemonTitle
                      className="grid-item"
                      imageUrl={item.imageUrl}
                      name={item.name}
                      onClick={() => history.push('/detalle', { pokemonSelected: item })}
                    />
                  </GridItem>
                );
              },
            )
          }
      </Grid>
    </div>
  );
}

export default PokemonList;
