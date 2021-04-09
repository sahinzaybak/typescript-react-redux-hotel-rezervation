import React,{useEffect,useState } from 'react';
import { RootState } from '../../reducers/rootReducer';
import { useSelector,connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//types
import {IPropsHotelList, IPropsHotelListDetail} from '../../models/IPropsHotelList'

//Actions
import {fetchHotelsDetailList} from '../../actions/hotels'

const StepOne = (prop:IPropsHotelListDetail) => {
  const [selectedHotelDetail,setSelectedHotelDetail] = useState([{max_adult_size:'', child_status:true}])
  const [adultInput,SetAdultInput] = useState('0')
  const [childInput,SetChildInput] = useState('0')
  const [entryDate, setEntryDate] = useState(new Date());
  const [exitDate, setExitDate] = useState(new Date());

  let hotelListDetail = useSelector((state: RootState) => {return state.hotels.hotelDetailList});
  
  function selectedHotel(e:any) { //hotel seçimi
    setSelectedHotelDetail(hotelListDetail.filter((list:IPropsHotelList) => list.id == e.target.value)) //seçili otelin bilgilerini state'e ata 
    SetAdultInput('0')
    SetChildInput('0')
  }

  function handleChange(date:Date) {
    setEntryDate(date)
  }

  function handleChange2(date:Date) {
    setExitDate(date)
  }

  function nextStep(){
    const selectedDateEntry = new Date(entryDate); // pass in date param here
    const selectedDateExit = new Date(exitDate); // pass in date param here
    const entryDateFormat = `${selectedDateEntry.getDate()}/${selectedDateEntry.getMonth()+1}/${selectedDateEntry.getFullYear()}`;
    const exitDateFormat = `${selectedDateExit.getDate()}/${selectedDateExit.getMonth()+1}/${selectedDateExit.getFullYear()}`;

    localStorage.setItem("stepOne", JSON.stringify({selectedHotelDetail, adultInput, childInput, entryDateFormat, exitDateFormat}))
    localStorage.setItem("stepCount", "2") //2.step'e geç.
  }

  useEffect(() => {
    let stepOneInfo = JSON.parse(localStorage.getItem('stepOne') || '{}')
    if(stepOneInfo != null){
        SetAdultInput(stepOneInfo.adultInput)
        SetChildInput(stepOneInfo.childInput)
        // setEntryDate(stepOneInfo.entryDateFormat)
        // setExitDate(stepOneInfo.exitDateFormat)
    }
      

    prop.fetchHotelsDetailList();
  }, []);

  return (
     <div className="rezervation-step-one"> 
      <div className="d-flex mb-4 w-100">
        <select className="form-control custom-input" onChange={selectedHotel}>
          <option>Rezarvasyon yapmak istediğiniz hoteli seçin</option>
          {prop.hotelList.map((_hotelList: IPropsHotelList) => (
            <option value={_hotelList.id}>{_hotelList.hotel_name}</option>
          ))}
        </select>
      </div>

      {!selectedHotelDetail[0].child_status &&<p className="rezervation-error">BU OTEL ÇOCUK ZİYARETÇİ KABUL ETMEMEKTEDİR!</p>}
      
      <div className="d-flex justify-content-between w-100 mb-4 pb-4">
        <div className="rezervation-item">
          <p className="rezervation-item__title">Giriş Tarihi</p>
          <DatePicker className="custom-input" dateFormat="dd/MM/yyyy" selected={entryDate} onChange={handleChange}  />
        </div>

        <div className="rezervation-item">
          <p className="rezervation-item__title">Çıkış Tarihi</p>
          <DatePicker className="custom-input" dateFormat="dd/MM/yyyy" selected={exitDate} onChange={handleChange2}  />
        </div>

        <div className="rezervation-item">
          <p className="rezervation-item__title">Yetişkin Sayısı
            {selectedHotelDetail[0].max_adult_size != '' && <span>(Max {selectedHotelDetail[0].max_adult_size} kişi)</span>} 
          </p>
          <input type="number" className="custom-input" min="0" max={selectedHotelDetail[0].max_adult_size} value={adultInput} 
            placeholder="Seçiniz" onChange={e =>SetAdultInput(e.target.value)} />
        </div>

        <div className="rezervation-item">
          <p className="rezervation-item__title">Çocuk Sayısı</p>
          <input type="number" className="custom-input" min="0" max="5" disabled={!selectedHotelDetail[0].child_status ? true : false} value={childInput} onChange={e =>SetChildInput(e.target.value)} />
        </div>
    </div>
    <a className="button" onClick={nextStep}> Kaydet ve Devam Et </a>
  </div>
  );
};


const mapStateToProps = (state:any) => {
  return{
  }
};

const mapDispatchToProps = {
  fetchHotelsDetailList
};

export default connect(mapStateToProps,mapDispatchToProps)(StepOne);