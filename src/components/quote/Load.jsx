import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ onClick }) {
  return <button onClick={onClick}>Load!</button>;
}

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};
