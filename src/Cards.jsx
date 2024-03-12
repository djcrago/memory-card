import { useEffect, useState } from 'react';
import Card from './Card';
import './styles/Cards.css';

export default function Cards({ clickedCards, setClickedCards }) {
  const [cardIds, setCardIds] = useState([]);
  const [randomCardOrder, setRandomCardOrder] = useState([]);

  useEffect(() => {
    const randomIds = [];

    for (let i = 0; i < 12; i += 1) {
      let randomId = Math.floor(Math.random() * 100);
      while (randomIds.includes(randomId)) {
        randomId = Math.floor(Math.random() * 100);
      }
      randomIds.push(randomId);
    }

    setCardIds(randomIds);
    setRandomCardOrder(randomizeCards(randomIds));
  }, []);

  function randomizeCards(cardIdsArray) {
    const cardIdsArrayCopy = [...cardIdsArray];
    const randomIdOrder = [];

    do {
      const randomCardId = Math.floor(Math.random() * cardIdsArrayCopy.length);
      randomIdOrder.push(cardIdsArrayCopy.splice(randomCardId, 1)[0]);
    } while (cardIdsArrayCopy.length > 0);

    return randomIdOrder;
  }

  function handleClick(event) {
    setRandomCardOrder(randomizeCards(cardIds));

    if (clickedCards.includes(event.target.id)) {
      setClickedCards([]);
    }
    if (!clickedCards.includes(event.target.id)) {
      setClickedCards([...clickedCards, event.target.id]);
    }
  }

  return (
    <div className="cards">
      {randomCardOrder.map((randomIndex) => {
        return (
          <Card
            key={randomIndex}
            id={randomIndex}
            info={randomIndex}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
