import React from 'react';
import PropTypes from 'prop-types';

const Form = function Form({ name, onChange }) {
  return (
    <div className="form">
      form
      <input name={name} onChange={onChange} />
    </div>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
