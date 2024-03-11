import Card from './Card';
import './styles/Cards.css';

export default function Cards() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="cards">
      {cards.map((card) => {
        return <Card key={cards.indexOf(card)} info={card} />;
      })}
    </div>
  );
}
