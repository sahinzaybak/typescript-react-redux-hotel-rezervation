import React, { PureComponent } from 'react';
import { connect } from "react-redux";

//Components
import HotelChoose from '../components/hotelChoose'

class rezervation extends PureComponent {
  render() {
    return (
      <div className="custom-container">
        <HotelChoose />
      </div>
    )
  }
}

export default rezervation;

