import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppointmentBookingForm from './AppointmentBookingForm'

class Assistant extends React.Component {
  render(){
    return(
      <div className="Assistant">
        <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
        <img src={this.props.assistant.image_url} id="profile-photo"/>
        <h3>Services Offered:</h3>
          <ul>
          </ul>
        <h3>Already Booked:</h3>
          <ul>
            Appointment Listings or Calendar will go here
          </ul>
        <AppointmentBookingForm assistant={this.props.assistant}/>
      </div>
    );
  }
}


export default Assistant;
