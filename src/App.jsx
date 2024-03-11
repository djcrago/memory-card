import { useState } from 'react';
import Info from './Info';
import Scoreboard from './Scoreboard';
import Cards from './Cards';
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
      <Cards />
    </>
  );

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
