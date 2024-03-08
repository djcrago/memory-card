import { useState } from 'react';
import Info from './Info';
import Scoreboard from './Scoreboard';
import './styles/App.css';

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  function handleClick() {
    setClickedCards([...clickedCards, 'blah']);
  }

  function resetScore() {
    setClickedCards([]);
  }

  return (
    <>
      <Info />
      <Scoreboard clickedCardsLength={clickedCards.length} />
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={resetScore}>Reset Me!</button>
    </>
  );

  //
  // cards
  // .. urls = [...]
  // .. useEffect to get images using urls
  // .. cards = create cards using image, assign each one a id
  // .. in each render first empty cards then,
  // .. random order = randomize(cards)
  // .. return (
  // .. .. <div>
  // .. .. .. {random order.map((card) => return <card cardInfo={card} />)}
  // .. .. </div>
  // .. )
  //
  // card({cardInfo, clickedCards, setClickedCards})
  // .. function handleClick(e) {
  // .. .. if (clickedCards.contains(e.target.id)) {
  // .. .. .. setClickedCards([])
  // .. .. }
  // .. .. if (!clickedCards.contains(e.target.id)) {
  // .. .. .. setClickedCards([...clickedCards, e.target.id])
  // .. .. }
  // .. }
  // .. return (
  // .. .. <img src={cardInfo.src} id={cardInfo.id} onClick={handleClick}/>
  // .. )
}

export default App;
