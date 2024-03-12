import { useState, useEffect } from 'react';
import './styles/Card.css';

export default function Card({ id, handleClick }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      getDog().then((result) => {
        if (!ignore) {
          setSrc(result);
        }
      });
    }

    return () => {
      ignore = true;
    };
  }, []);

  async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const message = await response.json();
    return message.message;
  }

  return (
    <div className="card" id={id} onClick={handleClick}>
      <img className="card-image" src={src} id={id} />
    </div>
  );
}
