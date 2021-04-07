import {hotelActionsType, FETCH_HOTELS_LIST, FETCH_HOTELS_DETAIL_LIST} from '../models/hotelActions';

interface hotelState {
  hotelList: string[];
  hotelDetailList: string[];
}

const initialState = {
  hotelList: [],
  hotelDetailList: [],
};

export default (state: hotelState = initialState, action: hotelActionsType) => {
  switch (action.type) {
    case FETCH_HOTELS_LIST:
      return {
        ...state,
        hotelList: action.payload,
      };
    case FETCH_HOTELS_DETAIL_LIST:
      return {
        ...state,
        hotelDetailList: action.payload,
      };
   
    default:
      return state;
  }
};
