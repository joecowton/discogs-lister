import axios from 'axios';
import { FETCH_DATA } from './types';
import Keys from '../../config/keys'

const myKey = Keys.discogsKey;
const mySecret = Keys.discogsSecret;
const ROOT_URL = 'https://api.discogs.com/artists/748051/releases'

export function fetchData() {
  const request =
  axios.get(`${ROOT_URL}?key=${myKey}&secret=${mySecret}`)

  return {
    type: FETCH_DATA,
    payload: request
  }
}
