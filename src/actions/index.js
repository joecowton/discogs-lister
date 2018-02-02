import axios from 'axios';
import { FETCH_DATA } from './types';
import { FETCH_RELEASE } from './types';
import Keys from '../../config/keys';

const myKey = Keys.discogsKey;
const mySecret = Keys.discogsSecret;
const ROOT_URL = 'https://api.discogs.com'

export function fetchData() {
  const request =  axios.get(`${ROOT_URL}/artists/748051/releases?key=${myKey}&secret=${mySecret}`)

  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function fetchRelease(id) {
  const request = axios.get(`${ROOT_URL}/masters/${id}?key=${myKey}&secret=${mySecret}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}
