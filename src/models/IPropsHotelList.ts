export interface IPropsHotelList{ // Hotel list
  id:number,
  hotel_name: string
}

export interface IPropsHotelListDetail{
  hotelList:[]
  fetchHotelsDetailList:VoidFunction
  name?:string
}

export interface IPropsHotelSelectedDetail{ // Hotel select Prop
  id: number,
  hotel_id: number,
  city: string
  max_adult_size: number,
  child_status: boolean,
}

