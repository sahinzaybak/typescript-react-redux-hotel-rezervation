export const FETCH_HOTELS_LIST  = 'FETCH_HOTELS_LIST'
export const FETCH_HOTELS_DETAIL_LIST  = 'FETCH_HOTELS_DETAIL_LIST'
export const FETCH_STEP_COUNT  = 'FETCH_STEP_COUNT'

interface hotelListAction {
  type: typeof FETCH_HOTELS_LIST,
  payload: typeof String
}

interface hotelListDetailAction {
  type: typeof FETCH_HOTELS_DETAIL_LIST,
  payload: typeof String
}

interface fetchStepCount {
  type: typeof FETCH_STEP_COUNT,
  payload: typeof Number
}

export type hotelActionsType = hotelListAction | hotelListDetailAction | fetchStepCount