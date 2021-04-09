import React,{useEffect,useState } from 'react';
import { RootState } from '../reducers/rootReducer';
import { useSelector} from 'react-redux';

let stepsCount:Number
const Steps = () => {
  stepsCount = useSelector((state: RootState) => {return state.hotels.stepCount}); 
  return (
   <div className="rezervation-steps d-flex justify-content-between">
      <div className={`rezervation-steps__item text-center ${stepsCount == 1 ? "active" : ""}`}>
        <i className="bi bi-calendar4-range"></i>
        <p>Otel ve Tarih  <br /> Seçimi </p>
      </div>
        <div className={`rezervation-steps__item text-center ${stepsCount == 2 ? "active" : ""}`}>
        <i className="bi bi-emoji-sunglasses"></i>
        <p>Oda Tipi ve Manzara <br /> Seçimi</p>
      </div>
        <div className={`rezervation-steps__item text-center ${stepsCount == 3 ? "active" : ""}`}>
        <i className="bi bi-credit-card"></i>
        <p>Önizleme ve Ödeme <br /> İşlemleri</p>
      </div>
    </div>
  );
};

export default Steps;
