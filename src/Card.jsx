import './styles/Card.css';

export default function Card({ info, handleClick, id }) {
  return (
    <div className="card" id={id} onClick={handleClick}>
      {info}
    </div>
  );
}
