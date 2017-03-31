const API_KEY = 'e4f4eb126438f8cf7d9803f8ed0e18db';

export const FETCH_WEATER = 'FETCH_WEATHER';

export function fetchWeather() {

  return {
    type: FETCH_WEATHER
  }
}