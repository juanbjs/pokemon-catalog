import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumb.css';

const BreadcrumbItem = ({ children }) => (
  <li className="breadcrumb-item">
    {children}
  </li>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const BreadcrumbSeparator = ({ children }) => (
  <li className="breadcrumb-separator">
    {children}
  </li>
);

BreadcrumbSeparator.propTypes = {
  children: PropTypes.node.isRequired,
};

const Breadcrumb = ({ children }) => {
  let reactChildren = React.Children.toArray(children);

  reactChildren = reactChildren.map((child, index) => {
    const key = `breadcrumb_item_${index}`;
    return (
      <BreadcrumbItem key={key}>{child}</BreadcrumbItem>
    );
  });

  const lastIndex = reactChildren.length - 1;

  reactChildren = reactChildren.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    const breadcrumbKey = `breadcrumb_sep${index}`;
    if (notLast) {
      acc.push(child, <BreadcrumbSeparator key={breadcrumbKey}>/</BreadcrumbSeparator>);
    } else {
      acc.push(child);
    }
    console.log('acc', acc);
    return acc;
  }, []);

  return (
    <div
      className="breadcrumb"
    >
      <ol>{reactChildren}</ol>
    </div>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Breadcrumb;
