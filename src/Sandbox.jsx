import { useEffect, useState } from 'react';

export default function Sandbox() {
  const [src, setSrc] = useState('');

  async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const message = await response.json();
    return message.message;
  }

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

  return (
    <>
      <img style={{ height: '300px' }} src={src} alt="dog" />
    </>
  );
}
