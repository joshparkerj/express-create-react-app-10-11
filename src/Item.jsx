import React from 'react';
import PropTypes from 'prop-types';

const keyValue = (obj) => (
  Object.entries(obj).map(([key, value]) => ({ [key]: value }))
);

const Item = function Item({ content }) {
  return (
    <div className="item">
      <ul>
        {keyValue(content).map((e) => (
          <li key={e}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

Item.propTypes = {
  content: PropTypes.shape({

  }).isRequired,
};

export default Item;
