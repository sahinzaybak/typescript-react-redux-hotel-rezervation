import {hotelActionsType, FETCH_HOTELS_LIST, FETCH_HOTELS_DETAIL_LIST,FETCH_STEP_COUNT} from '../models/hotelActions';

interface hotelState {
  hotelList: string[];
  hotelDetailList: string[];
  stepCount:number
}

const initialState = {
  hotelList: [],
  hotelDetailList: [],
  stepCount:1
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
    case FETCH_STEP_COUNT:
      return {
        ...state,
        stepCount: action.payload,
      };
   
    default:
      return state;
  }
};
