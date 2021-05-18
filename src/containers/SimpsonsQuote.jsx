import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import getQuote from '../services/SimpsonsAPI.js';

export default function SimpsonsQuote() {
  const [charImg, setCharImg] = useState(
    'https://static.simpsonswiki.com/images/5/58/Canadian_Flanders.png'
  );
  const [charText, setCharText] = useState('Howdy Neighbor');

  const handleClick = async () => {
    const quote = await getQuote();
    console.log(quote);
    setCharImg(quote.image);
    setCharText(quote.text);
  };
  return (
    <>
      <h2>Container, present!</h2>
      <Load onClick={handleClick} />
      <Quote image={charImg} text={charText} />
    </>
  );
}
