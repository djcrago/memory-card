import { useState } from 'react';
import Card from './Card';
import './styles/Cards.css';

export default function Cards({ clickedCards, setClickedCards }) {
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [randomizedCards, setRandomizedCards] = useState(randomizeCards(cards));

  function randomizeCards(cardsArray) {
    const cardsCopy = [...cardsArray];

    const cardsRandomized = [];

    do {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      cardsRandomized.push(cardsCopy.splice(randomIndex, 1)[0]);
    } while (cardsCopy.length > 0);

    return cardsRandomized;
  }

  function handleClick(event) {
    if (clickedCards.includes(event.target.id)) {
      setClickedCards([]);
    }
    if (!clickedCards.includes(event.target.id)) {
      setClickedCards([...clickedCards, event.target.id]);
    }
    setRandomizedCards(randomizeCards(cards));
  }

  return (
    <div className="cards">
      {randomizedCards.map((card) => {
        return (
          <Card
            key={cards.indexOf(card)}
            id={cards.indexOf(card)}
            info={card}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
