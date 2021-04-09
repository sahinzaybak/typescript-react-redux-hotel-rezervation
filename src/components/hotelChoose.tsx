import React,{useEffect,useState } from 'react';
import { connect } from "react-redux";

//Components
import Steps from './steps'
import StepsOne from './steps/steps-one'

//Actions
import { fetchHotelsList } from '../actions/hotels';

interface Ihotel {
  hotelList:[],
  fetchHotelsList:VoidFunction
}

const HotelChoose = (prop:Ihotel) => {
  useEffect(() => {
    prop.fetchHotelsList();
  },[]);

  return (
    <div className="rezervation">
      <div className="rezervation-wrp w-100">
        <Steps />
        <StepsOne hotelList={prop.hotelList}/>
      </div>
    </div>
  );
};


const mapStateToProps = (state:any) => {
  return {
    hotelList: state.hotels.hotelList
  };
};

const mapDispatchToProps = {
  fetchHotelsList
};

export default connect(mapStateToProps,mapDispatchToProps)(HotelChoose);