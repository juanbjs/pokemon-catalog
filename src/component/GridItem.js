import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

function GridItem({ children }) {
  return (
    <div className="grid-item">
      {children}
    </div>
  );
}

GridItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GridItem;
