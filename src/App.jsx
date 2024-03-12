import { useState } from 'react';
import Info from './Info';
import Scoreboard from './Scoreboard';
import Cards from './Cards';
import './styles/App.css';

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <>
      <div className="top">
        <Info />
        <Scoreboard clickedCardsLength={clickedCards.length} />
      </div>
      <Cards clickedCards={clickedCards} setClickedCards={setClickedCards} />
    </>
  );
}

export default App;
