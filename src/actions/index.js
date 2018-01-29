import {  FETCH_DATA} from './types';

// export function fetchData() {
//   return {
//     type: FETCH_DATA,

//   }
// }

import axios from 'axios';

const API_KEY = 'dae1bb1309c6b5fb8afbd8970332deb2'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchData() {
  const url = `${ROOT_URL}&q=${'new york'},us`;
  const request = axios.get(url)

  console.log('Request', request);

  return {
    type: FETCH_DATA,
    payload: [
      { title: 'this' },
      { title: 'that' },
      { title: 'other' }
    ]
  }
}
