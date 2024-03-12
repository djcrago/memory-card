import { useState } from 'react';
import Info from './Info';
import Scoreboard from './Scoreboard';
import Cards from './Cards';
import './styles/App.css';
import Sandbox from './Sandbox';

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <>
      <Info />
      <Scoreboard clickedCardsLength={clickedCards.length} />
      <Cards clickedCards={clickedCards} setClickedCards={setClickedCards} />
    </>
  );
}

export default App;
