import {useState} from 'react';

import fetchFunction from '../services/sw-service.js';

const People = () => {
  // URL + SRC
  const PEOPLE_URL = 'https://www.swapi.tech/api/people';
  const PEOPLE_SRC = 'https://starwars-visualguide.com/assets/img/characters';

  const [next, setNext] = useState(1);

  const [name, setName] = useState();
  const [src, setSrc] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState();
  const [eyeColor, setEyeColor] = useState();

  async function handleClick() {
    setNext(next + 1);
    const fetchResponse = await fetchFunction(PEOPLE_URL, next);
    const axiousProps = fetchResponse.data.result.properties;

    setSrc(`${PEOPLE_SRC}/${next}.jpg`);
    setName(axiousProps.name);

    setGender(axiousProps.gender);
    setBirthDate(axiousProps.birth_year);
    setEyeColor(axiousProps.eye_color);
  }

  return (
    <div className='content'>
      <button onClick={handleClick}>NEXT</button>
      <br />
      <img src={src} alt={name} id='img' />
      <h3 id='name'>{name}</h3>
      <ul className='item-info'>
        <li>
          Gender: <span id='gender'>{gender}</span>
        </li>
        <li>
          Birth Year: <span id='birth-year'>{birthDate}</span>
        </li>
        <li>
          Eye color: <span id='eye-color'>{eyeColor}</span>
        </li>
      </ul>
    </div>
  );
};

export default People;
