import React from 'react';
import PropTypes from 'prop-types';

const Form = function Form({ name, onChange }) {
  return (
    <div className="form">
      <label htmlFor={name}>
        {name}
        <input id={name} name={name} onChange={onChange} />
      </label>
    </div>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
