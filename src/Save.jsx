import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const filter = (data) => {
  const filtered = {};
  Object.keys(data).filter((key) => data[key]).forEach((key) => { filtered[key] = data[key]; });
  return filtered;
};

const Save = function Save({ data, target }) {
  return (
    <div className="save">
      <button type="submit" onClick={async () => { await axios.post(target, filter(data)); }}>
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
  }).isRequired,
  target: PropTypes.string.isRequired,
};

export default Save;
