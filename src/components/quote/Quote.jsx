import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ image, text, character }) {
  return (
    <figure>
      <img
        name="sImg"
        aria-label="Character Picture"
        src={image}
        alt={character}
      />
      <p name="sText" aria-label="Character Quote">
        {text}
      </p>
    </figure>
  );
}

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
