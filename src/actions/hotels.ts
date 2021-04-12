import axios from 'axios'
const BASE_URL = "https://5f6d939160cf97001641b049.mockapi.io/tkn"

export function fetchHotelsList() {
  return async (dispatch: (arg0: { type: string; payload: Array<string>; }) => void) => {
    await axios.get(`${BASE_URL}/hotels`).then(value => {
      dispatch({
        type: "FETCH_HOTELS_LIST",
        payload: value.data,
      });
    });
  };
}

export function fetchHotelsDetailList() {
  return async (dispatch: (arg0: { type: string; payload: Array<string>; }) => void) => {
    await axios.get(`${BASE_URL}/hotel-details`).then(value => {
      dispatch({
        type: "FETCH_HOTELS_DETAIL_LIST",
        payload: value.data,
      });
    });
  };
}

export function stepCount(_stepCount:number) {
  return async (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch({
      type: "FETCH_STEP_COUNT",
      payload: _stepCount,
    });
  };
}