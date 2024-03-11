import { useState } from 'react';
import Card from './Card';
import './styles/Cards.css';

export default function Cards({ clickedCards, setClickedCards }) {
  const [cards, setCards] = useState([
    { value: 1, id: 1 },
    { value: 2, id: 2 },
    { value: 3, id: 3 },
    { value: 4, id: 4 },
    { value: 5, id: 5 },
    { value: 6, id: 6 },
    { value: 7, id: 7 },
    { value: 8, id: 8 },
    { value: 9, id: 9 },
    { value: 10, id: 10 },
    { value: 11, id: 11 },
    { value: 12, id: 12 },
  ]);

  function randomizeCards(cardsArray) {
    const cardsCopy = [...cardsArray];

    const cardsRandomized = [];

    do {
      const randomIndex = Math.floor(Math.random() * cardsCopy.length);
      cardsRandomized.push(cardsCopy.splice(randomIndex, 1)[0]);
    } while (cardsCopy.length > 0);

    return cardsRandomized;
  }

  function handleClick(e) {
    if (clickedCards.includes(e.target.id)) {
      setClickedCards([]);
    }
    if (!clickedCards.includes(e.target.id)) {
      setClickedCards([...clickedCards, e.target.id]);
    }
    setCards(randomizeCards(cards));
  }

  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <Card
            key={cards.indexOf(card)}
            info={card}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
