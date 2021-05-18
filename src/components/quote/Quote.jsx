import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ image, text }) {
  return (
    <figure>
      <img name="sImg" aria-label="Character Picture" src={image} />
      <p name="sText" aria-label="Character Quote">{text}</p>
    </figure>
  );
}

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
