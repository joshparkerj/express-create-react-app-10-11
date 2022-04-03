import React from 'react';
import PropTypes from 'prop-types';

const Field = function Field({ text }) {
  return (
    <div className="field">
      <h1>{text}</h1>
    </div>
  );
};

Field.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Field;
