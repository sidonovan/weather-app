import { useState } from 'react';
import '../header.css';
import './SearchCity.css';

export default function SearchCity() {
  const [query, setQuery] = useState('');
  const city = query;
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const SEARCH_CITY_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=` + city + `&limit=5&appid=${apiKey}`;

  fetch(`${SEARCH_CITY_API_URL}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });

  return (
    <>
      <form action="#" className="search">
        <input type="text" className="search__input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search city...."></input>
        <button className="search__submit">
          <img src="./src/assets/icons/Search.svg" className="search__icon"></img>
        </button>
        <ul className="dropdown">
          <li className="dropdown-item">Santa Clara, CA</li>
          <li className="dropdown-item">Santa Clara, CA</li>
          <li className="dropdown-item">Santa Clara, CA</li>
        </ul>
      </form>
    </>
  );
}
