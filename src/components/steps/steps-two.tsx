import React,{useEffect,useState } from 'react';
import {connect} from 'react-redux';
//types
import {IPropsHotelRooms,IPropsHotelView} from '../../types/IPropsHotelList'
//Actions
import {stepCount} from '../../actions/hotels'

let selectedPrice = JSON.parse(localStorage.getItem('selectedPrice')|| '{}')
let selectedHotelDetailStore = JSON.parse(localStorage.getItem('stepOne') || '{}')
let selectedHotelDetailStepStore = JSON.parse(localStorage.getItem('stepTwo') || '{}')
const StepsTwo = (prop:{stepCount:(step:number) => void}) => {
  const [selectedRoomType, setSelectedRoom] = useState('')
  const [selectedViewType, setSelectedView] = useState('')
  const [price, setPrice] = useState(0)
  const [priceRate, setPriceRate] = useState(0)
  const [selectedHotelInfo, setSelectedHotelInfo] = useState({
    selectedHotelName:'',
    entryDateFormat:'',
    exitDateFormat:'',
    adultInput: '',
    childInput: '',
    selectedHotelDetail:[{room_type:[], room_scenic:[]}]
  })

  function changePrice(price:number){
    setPrice(price)
    localStorage.setItem('selectedPrice', price)
  }

  function changePriceRate(rate:number){
    let newPrice = (selectedPrice * rate) / 100
    setPrice(selectedPrice + newPrice)
    setPriceRate(selectedPrice + newPrice)
  }

  function nextStep(){ //kaydet ve devam et
    localStorage.setItem("stepTwo", JSON.stringify({selectedRoomType, selectedViewType, price, priceRate, selectedHotelInfo}))
    prop.stepCount(3) //2.step'e geç
    localStorage.setItem("stepCount", "3") //2.step'e geç.
  }

  useEffect(() => { //sayfa yenilendiğinde seçili bilgileri getir.
    setSelectedHotelInfo(selectedHotelDetailStore)
    if(selectedHotelDetailStepStore != undefined){
      setSelectedRoom(selectedHotelDetailStepStore.selectedRoomType)
      setSelectedView(selectedHotelDetailStepStore.selectedViewType)
      setPrice(selectedHotelDetailStepStore.price)
    }
    else{
      debugger;
      changePrice(selectedHotelDetailStore.selectedHotelDetail[0].room_type[0].price)
      changePriceRate(selectedHotelDetailStore.selectedHotelDetail[0].room_scenic[0].price_rate)
      setSelectedRoom(selectedHotelDetailStore.selectedHotelDetail[0].room_type[0].title)
      setSelectedView(selectedHotelDetailStore.selectedHotelDetail[0].room_scenic[0].title)
    }
  }, []);

  return (
    <div className="rezervation-view">
      <div className="rezervation-view__header d-flex justify-content-between">
        <h3>{selectedHotelInfo.selectedHotelName}</h3>
        <p>{selectedRoomType}{}</p>
        <p>{selectedViewType}</p>
        <h3>{price} TL </h3>
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
      {selectedHotelInfo.selectedHotelDetail[0].room_type.map((_roomType: IPropsHotelRooms) => (
        <div className="col-md-4">
          <div className={`rezervation-view__item ${_roomType.title == selectedRoomType ? "selected" : ""}`} onClick={() => 
            {setSelectedRoom(_roomType.title); changePrice(_roomType.price)}}>
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
      {selectedHotelInfo.selectedHotelDetail[0].room_scenic.map((_viewType: IPropsHotelView) => (
        <div className="col-md-4">
          <div className={`rezervation-view__item ${_viewType.title == selectedViewType ? "selected" : ""}`}  onClick={() => {setSelectedView(_viewType.title);changePriceRate(_viewType.price_rate)}}>
            <h6>{_viewType.title}</h6>
            <img src={_viewType.photo} className="w-100 mb-3" alt=""/>
            <p>Fiyata etki oranı: + {_viewType.price_rate} %</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    <a className="button" onClick={nextStep}> Kaydet ve Devam Et </a> 
  </div>
  );
};

const mapStateToProps = () => {};
const mapDispatchToProps = {
  stepCount
};

export default connect(mapStateToProps,mapDispatchToProps)(StepsTwo);
