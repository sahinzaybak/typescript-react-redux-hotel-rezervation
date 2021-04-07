import React,{useEffect,useState } from 'react';
import { useSelector,connect} from 'react-redux';
import { RootState } from '../reducers/rootReducer';

//Models
import {IPropsHotelList} from '../models/IPropsHotelList'

//Actions
import {fetchHotelsDetailList} from '../actions/hotels'

const HotelChoose = (prop:any) => {
  const [selectedHotelDetail,setSelectedHotelDetail] = useState([{max_adult_size:'', child_status:true}])
  let hotelList = useSelector((state: RootState) => {return state.hotels.hotelList});
  let hotelListDetail = useSelector((state: RootState) => {return state.hotels.hotelDetailList});

  const selectedHotel = async (e:any )=> { //hotel seçimi
    if(selectedHotelDetail[0].max_adult_size == ''){ //sadece ilk seçimde servise gitsin
      await prop.fetchHotelsDetailList();
    }
    if(hotelListDetail.length != 0)
      await setSelectedHotelDetail(hotelListDetail.filter((list:IPropsHotelList) => list.id == e.target.value)) 
      //seçili otelin bilgilerini state'e ata.
  }

  return (
    <div>
        <div className="as"> 
          <select className="form-control" onChange={selectedHotel}>
            <option>Rezarvasyon yapmak istediğiniz hoteli seçin</option>
            {hotelList.map((_hotelList: IPropsHotelList) => (
              <option value={_hotelList.id}>{_hotelList.hotel_name}</option>
            ))}
          </select>
          
          {selectedHotelDetail.length > 0 &&
            <input type="number" min="0" max={selectedHotelDetail[0].max_adult_size} placeholder="Seçiniz"/>
          }     

          {!selectedHotelDetail[0].child_status &&
            <p>BU OTEL ÇOCUK KABUL ETMEMEKTEDİR.</p>
          }
          
            <input type="number" placeholder="çocuk sayısı" />
           
        </div>
    </div>
  );
};

const mapStateToProps = () => {
  return{}
};

const mapDispatchToProps = {
  fetchHotelsDetailList
};

export default connect(mapStateToProps,mapDispatchToProps)(HotelChoose);