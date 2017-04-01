import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: 
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; //This returns [city, city, city]
                                              //NOT [city, [city, city] ]
      // ... is the Spread Operator, spreads the array in its individual components

  }
  return state;
}