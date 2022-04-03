import React from 'react';
import PropTypes from 'prop-types';

const Load = function Load({ update, target }) {
  return (
    <div className="load">
      <button type="button" onClick={() => update(fetch, target)}>
        load
      </button>
    </div>
  );
};

Load.propTypes = {
  update: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
};

export default Load;
