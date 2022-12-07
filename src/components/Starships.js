import {useState} from 'react';
// import axios from 'axios'

import fetchFunction from '../services/sw-service.js';

const Starships = () => {
  // URL + SRC
  const STARSHIPS_URL = 'https://www.swapi.tech/api/starships';
  const STARSHIPS_SRC = 'https://starwars-visualguide.com/assets/img/starships';

  const [next, setNext] = useState(1);

  const [name, setName] = useState();
  const [src, setSrc] = useState();

  const [crew, setCrew] = useState();
  const [length, setLength] = useState();
  const [passengers, setPassengers] = useState();

  async function handleClick() {
    setNext(next + 1);
    const fetchResponse = await fetchFunction(STARSHIPS_URL, next);
    const axiousProps = fetchResponse.data.result.properties;

    setSrc(`${STARSHIPS_SRC}/${next}.jpg`);
    setName(axiousProps.name);

    setCrew(axiousProps.crew);
    setLength(axiousProps.length);
    setPassengers(axiousProps.passengers);
  }

  return (
    <div className='content'>
      <button onClick={handleClick}>NEXT</button>
      <br />
      <img src={src} alt={name} id='img' />
      <h3 id='name'>{name}</h3>
      <ul className='item-info'>
        <li>
          Crew: <span>{crew}</span>
        </li>
        <li>
          Length: <span>{length}</span>
        </li>
        <li>
          Passengers: <span>{passengers}</span>
        </li>
      </ul>
    </div>
  );
};

export default Starships;
