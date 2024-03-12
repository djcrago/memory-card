import { useEffect, useState } from 'react';
import Card2 from './Card2';
import './styles/Cards.css';

export default function Cards2({ clickedCards, setClickedCards }) {
  const [cardUrls, setCardUrls] = useState([]);
  const [randomCardOrder, setRandomCardOrder] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchedUrls = [];

    for (let i = 0; i < 12; i += 1) {
      fetchedUrls.push(getDog());
    }

    Promise.all(fetchedUrls).then((result) => {
      if (!ignore) {
        setCardUrls(result);
        setRandomCardOrder(randomizeCards(result));
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const message = await response.json();
    return message.message;
  }

  function randomizeCards(cardUrlsArray) {
    const cardUrlsArrayCopy = [...cardUrlsArray];
    const randomUrlOrder = [];

    do {
      const randomIndex = Math.floor(Math.random() * cardUrlsArrayCopy.length);
      if (cardUrlsArrayCopy[randomIndex] !== '') {
        randomUrlOrder.push(cardUrlsArrayCopy.splice(randomIndex, 1, '')[0]);
      }
    } while (randomUrlOrder.length < cardUrlsArray.length);

    return randomUrlOrder;
  }

  function handleClick(event) {
    setRandomCardOrder(randomizeCards(cardUrls));

    if (clickedCards.includes(event.target.id)) {
      setClickedCards([]);
    }
    if (!clickedCards.includes(event.target.id)) {
      setClickedCards([...clickedCards, event.target.id]);
    }
  }

  return (
    <div className="cards">
      {randomCardOrder.map((url) => {
        return (
          <Card2
            key={cardUrls.indexOf(url)}
            id={cardUrls.indexOf(url)}
            url={url}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
