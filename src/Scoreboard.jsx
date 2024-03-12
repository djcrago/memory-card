import { useEffect, useState } from 'react';
import './styles/Scoreboard.css';

export default function Scoreboard({ clickedCardsLength }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (clickedCardsLength === 0) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    } else {
      setCurrentScore(clickedCardsLength);
    }
  }, [currentScore, bestScore, clickedCardsLength]);

  return (
    <div className="scoreboard">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
