import {
  FETCH_DATA
} from './types';

export function fetchData() {
  return {
    type: FETCH_DATA,
    payload: [
      {name: 'pev'},
      {name: 'asusu'},
      {name: 'kowton'}
    ]
  }
}
