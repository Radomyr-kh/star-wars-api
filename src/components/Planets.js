import {useState} from 'react';

import fetchFunction from '../services/sw-service.js';

const Planets = () => {
  const PLANETS_URL = 'https://www.swapi.tech/api/planets';
  const PLANETS_SRC = 'https://starwars-visualguide.com/assets/img/planets';

  const [next, setNext] = useState(1);

  const [name, setName] = useState();
  const [src, setSrc] = useState();
  const [climate, setClimate] = useState();
  const [population, setPopulation] = useState();
  const [terrain, setTerrain] = useState();

  async function handleClick() {
    setNext(next + 1);
    const fetchResponse = await fetchFunction(PLANETS_URL, next);
    const axiousProps = fetchResponse.data.result.properties;

    setSrc(`${PLANETS_SRC}/${next}.jpg`);

    setName(axiousProps.name);
    setClimate(axiousProps.climate);
    setPopulation(axiousProps.population);
    setTerrain(axiousProps.terrain);
  }
  return (
    <div className='content'>
      <button onClick={handleClick}>NEXT</button>
      <br />
      <img src={src} alt={name} id='img' />
      <h3 id='name'>{name}</h3>
      <ul className='item-info'>
        <li>
          Climate: <span>{climate}</span>
        </li>
        <li>
          Population: <span>{population}</span>
        </li>
        <li>
          Terrain: <span>{terrain}</span>
        </li>
      </ul>
    </div>
  );
};

export default Planets;
