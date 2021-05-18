import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ image, text }) {
  return (
    <figure>
      <img src={image} />
      <p>{text}</p>
    </figure>
  );
}

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
