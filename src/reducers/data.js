import {
  FETCH_DATA
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log(action.payload.data);
      return [...state, ...action.payload.data ];
  }
  return state;
}
