import React, { PureComponent } from 'react';
import { connect } from "react-redux";

//Components
import HotelChoose from '../components/hotelChoose'
//Actions
import { fetchHotelsList } from '../actions/hotels';

class rezervation extends PureComponent<any> {
  componentDidMount(){
    this.props.fetchHotelsList()
  }
  render() {
    return (
      <div>
        <HotelChoose />
      </div>
    )
  }
}

const mapStateToProps = (state:any) => {
  return {
    hotelList: state.hotels.hotelList
  };
};

const mapDispatchToProps = {
  fetchHotelsList
};

export default connect(mapStateToProps,mapDispatchToProps)(rezervation);

