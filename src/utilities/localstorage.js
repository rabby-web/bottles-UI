const getStoreCard = () => {
  const storedCardString = localStorage.getItem("card");
  if (storedCardString) {
    return JSON.parse(storedCardString);
  }
  return [];
};

const saveCardToLS = (card) => {
  const cardStringified = JSON.stringify(card);
  localStorage.setItem("card", cardStringified);
};

const addToLS = (id) => {
  const card = getStoreCard();
  card.push(id);
  // save to local storage
  saveCardToLS(card);
};

export { addToLS, getStoreCard };
