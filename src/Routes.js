import React, {
  useState, useEffect,
} from 'react';

import { Switch, Route } from 'react-router-dom';

import { Loading } from './component';
import { PokemonList, PokemonDetail } from './views';

const renderRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
    >
      <PokemonList />
    </Route>
    <Route
      exact
      path="/detalle"
    >
      <PokemonDetail />
    </Route>
  </Switch>
);

function Routes() {
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    const loadRoutes = () => {
      setRoutes(renderRoutes());
    };
    loadRoutes();
    // eslint-disable-next-line
    }, []);

  return routes || <Loading />;
}

export default Routes;
