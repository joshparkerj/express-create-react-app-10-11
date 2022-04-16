import React from 'react';
import PropTypes from 'prop-types';

const keyValue = (obj) => (
  Object.entries(obj).map(([key, value]) => ({ key, value }))
);

const Item = function Item({ content }) {
  return (
    <div className="item">
      <ul>
        {keyValue(content).map(({ key, value }) => (
          <li key={key}>
            <h3>{key}</h3>
            <p>
              {`${key} ${value}`}
            </p>
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
