import React from 'react';
import PropTypes from 'prop-types';

const postTarget = (data, target) => (
  fetch(target, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })
);

const Save = function Save({ data, target }) {
  return (
    <div className="save">
      <button type="submit" onClick={() => postTarget(data, target)}>
        save
      </button>
    </div>
  );
};

Save.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    stuff: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  target: PropTypes.string.isRequired,
};

export default Save;
