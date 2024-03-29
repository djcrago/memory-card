import './styles/Card.css';

export default function Card({ id, handleClick, url }) {
  return (
    <div className="card" id={id} onClick={handleClick}>
      <img className="card-image" src={url} id={id} />
    </div>
  );
}
