export const FETCH_HOTELS_LIST  = 'FETCH_HOTELS_LIST'
export const FETCH_HOTELS_DETAIL_LIST  = 'FETCH_HOTELS_DETAIL_LIST'

interface hotelListAction {
  type: typeof FETCH_HOTELS_LIST,
  payload: typeof String
}

interface hotelListDetailAction {
  type: typeof FETCH_HOTELS_DETAIL_LIST,
  payload: typeof String
}

export type hotelActionsType = hotelListAction | hotelListDetailAction