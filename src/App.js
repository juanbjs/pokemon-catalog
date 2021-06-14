import React from 'react';

import './App.css';

import { getPokemonCatalog } from './service';

import { Loading, Grid } from './component';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

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
      <Grid
        data={data}
      />
    </div>
  );
}

export default App;
