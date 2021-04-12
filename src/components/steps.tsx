import { RootState } from '../reducers/rootReducer';
import { useSelector,connect} from 'react-redux';

//Actions
import {stepCount} from '../actions/hotels'

let stepsCount:Number
const Steps = (prop:{stepCount:(step:number) => void}) => {
  stepsCount = useSelector((state: RootState) => {return state.hotels.stepCount}); 
  return (
   <div className="rezervation-steps d-flex justify-content-between">
      <div className={`rezervation-steps__item text-center ${stepsCount == 1 ? "active" : ""}`} onClick={() => prop.stepCount(1)}>
        <i className="bi bi-calendar4-range"></i>
        <p>Otel ve Tarih  <br /> Seçimi </p>
      </div>
        <div className={`rezervation-steps__item text-center ${stepsCount == 2 ? "active" : ""}`} onClick={() => prop.stepCount(2)}>
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

const mapStateToProps = () => {};
const mapDispatchToProps = {
  stepCount
};

export default connect(mapStateToProps,mapDispatchToProps)(Steps);
