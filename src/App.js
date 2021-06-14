import React from 'react';

import './App.css';

import { getPokemonCatalog } from './service';

import {
  Loading,
  Grid,
  Search,
  Divider,
} from './component';

function applyFilters(services, query) {
  return services.filter((service) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
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

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

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
    <div className="App">
      <Search
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <Divider />
      <Grid
        data={filteresData.length > 0 ? filteresData : data}
      />
    </div>
  );
}

export default App;
