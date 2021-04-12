import React,{useEffect,useState } from 'react';
import { connect } from "react-redux";
import { RootState } from '../reducers/rootReducer';
import { useSelector} from 'react-redux';

//Components
import Steps from './steps'
import StepsOne from './steps/steps-one'
import StepsTwo from './steps/steps-two'

//Actions
import { fetchHotelsList,stepCount } from '../actions/hotels';

interface Ihotel {
  hotelList:[],
  fetchHotelsList:VoidFunction
  stepCount:(step:number) => void;
}

let stepNumber:Number
const HotelChoose = (prop:Ihotel) => {
  stepNumber = useSelector((state: RootState) => {return state.hotels.stepCount}); 
  useEffect(() => {
    prop.stepCount(JSON.parse(localStorage.getItem('stepCount')|| '{}')) // localStorage stepCount değerini state'e taşı.
    prop.fetchHotelsList(); //hotel listesi
  },[]);

  return (
    <div className="rezervation">
      <div className="rezervation-wrp w-100">
        <Steps />
        {stepNumber == 1 && <StepsOne hotelList={prop.hotelList}/> }
        {stepNumber == 2 && <StepsTwo/> }
      </div>
    </div>
  );
};

const mapStateToProps = (state: { hotels: { hotelList: Array<string> }}) => {return {hotelList: state.hotels.hotelList}};
const mapDispatchToProps = {fetchHotelsList,stepCount};

export default connect(mapStateToProps,mapDispatchToProps)(HotelChoose);