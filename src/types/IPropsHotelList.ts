export interface IPropsHotelList{ // Hotel list
  id:number,
  hotel_name: string
}

export interface IPropsHotelListDetail{
  hotelList:[]
  fetchHotelsDetailList:VoidFunction
  stepCount:(step:number) => void;
  name?:string
}

export interface IPropsHotelSelectedDetail{ // Hotel select Prop
  id: number,
  hotel_id: number,
  city: string
  max_adult_size: number,
  child_status: boolean,
}

export interface IPropsHotelRooms{ // Hotel list
  description: string,
  id: number,
  photo: string,
  price: number
  title: string
}

export interface IPropsHotelView{ // Hotel list
  description: string,
  id: number,
  photo: string,
  price_rate: number
  title: string
}
