import { useState } from 'react';
import Info from './Info';
import Scoreboard from './Scoreboard';
import Cards from './Cards';
import './styles/App.css';

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  function checkClickedCards() {
    setClickedCards([...clickedCards, 'blah']);
  }

  function resetClickedCards() {
    setClickedCards([]);
  }

  return (
    <>
      <Info />
      <Scoreboard clickedCardsLength={clickedCards.length} />
      <button onClick={checkClickedCards}>Click Me!</button>
      <button onClick={resetClickedCards}>Reset Me!</button>
      <Cards clickedCards={clickedCards} setClickedCards={setClickedCards} />
    </>
  );
}

export default App;
