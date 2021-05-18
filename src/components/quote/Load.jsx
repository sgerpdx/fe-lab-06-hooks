import React from 'react';
//import PropTypes from 'prop-types';

export default function Load({ onChange }) {
  return (
    <button id="button" onChange={onChange}>
      Load!
    </button>
  );
}

// Load.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
