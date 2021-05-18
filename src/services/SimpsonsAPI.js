const getQuote = async () => {
  const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`);
  const data = await res.json();

  return {
    image: data[0].image,
    text: data[0].quote,
    character: data[0].character,
  };
};

export default getQuote;
