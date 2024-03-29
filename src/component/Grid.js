import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

function Grid({ children }) {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
