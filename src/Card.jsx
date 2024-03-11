import './styles/Card.css';

export default function Card({ info, handleClick }) {
  return (
    <div className="card" id={info.id} onClick={handleClick}>
      {info.value}
    </div>
  );
}
