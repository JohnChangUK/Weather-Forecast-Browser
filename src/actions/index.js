import axios from 'axios';

const API_KEY = 'e4f4eb126438f8cf7d9803f8ed0e18db';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  // axios makes a GET AJAX request, and 
  // will return a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // payload is an optional property that goes along with actions
    // that can contain some additional data that describes
    // this particular action
    payload: request
  };
}