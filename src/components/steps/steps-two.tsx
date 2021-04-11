import React,{useEffect,useState } from 'react';

//types
import {IPropsHotelRooms,IPropsHotelView} from '../../models/IPropsHotelList'

const StepsTwo = () => {
  const [selectedRoomType, setSelectedRoom] = useState(-1)
  const [selectedViewType, setSelectedView] = useState(-1)
  const [price, setPrice] = useState(0)
  const [selectedHotelInfo, setSelectedHotelInfo] = useState({
    selectedHotelName:'',
    entryDateFormat:'',
    exitDateFormat:'',
    adultInput: '',
    childInput: '',
    selectedHotelDetail:[{room_type:[], room_scenic:[]}]
  })

  function changePrice(price:any){
    setPrice(price)
    localStorage.setItem('selectedPrice', price)
  }

  function changePriceRate(rate:any){
    let selectedPrice = JSON.parse(localStorage.getItem('selectedPrice')|| '{}')
    let newPrice = (selectedPrice * rate) / 100
    setPrice(selectedPrice + newPrice)
  }

  useEffect(() => { //sayfa yenilendiğinde seçili bilgileri getir.
    setSelectedHotelInfo(JSON.parse(localStorage.getItem('stepOne') || '{}'))
  }, []);

  return (
    <div className="rezervation-view">
      <div className="rezervation-view__header d-flex justify-content-between">
        <h3>{selectedHotelInfo.selectedHotelName}</h3>
        <h3>({price}) TL </h3>
      </div>
    
      <div className="d-flex justify-content-between">
        <p><strong>Giriş tarihi: </strong>{selectedHotelInfo.entryDateFormat}</p>
        <p><strong>Çıkış tarihi: </strong>{selectedHotelInfo.exitDateFormat}</p>
        <p><strong>Yetişkin: </strong>{selectedHotelInfo.adultInput}</p>
        <p><strong>Çocuk: </strong>{selectedHotelInfo.childInput}</p>
      </div>

    <div className="rezervation-view__wrp">
      <h5 className="mt-3 mb-3">Oda Tipi Seçimi</h5>
      <div className="row">
      {selectedHotelInfo.selectedHotelDetail[0].room_type.map((_roomType: IPropsHotelRooms, i:number) => (
        <div className="col-md-4">
          <div className={`rezervation-view__item ${i == selectedRoomType ? "selected" : ""}`} onClick={() => {setSelectedRoom(i); changePrice(_roomType.price)}}>
            <h6>{_roomType.title}</h6>
            <img src={_roomType.photo} className="w-100 mb-3" alt=""/>
            <p>{_roomType.price} TL</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    <div className="rezervation-view__wrp mt-4">
      <h5 className="mt-3 mb-3">Manzara Tipi Seçimi</h5>
      <div className="row">
      {selectedHotelInfo.selectedHotelDetail[0].room_scenic.map((_viewType: IPropsHotelView, i:number) => (
        <div className="col-md-4">
          <div className={`rezervation-view__item ${i == selectedViewType ? "selected" : ""}`}  onClick={() => {setSelectedView(i);changePriceRate(_viewType.price_rate)}}>
            <h6>{_viewType.title}</h6>
            <img src={_viewType.photo} className="w-100 mb-3" alt=""/>
            <p>Fiyata etki oranı: + {_viewType.price_rate} %</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>
  );
};


export default StepsTwo;