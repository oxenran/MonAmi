import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppointmentBookingForm from './AppointmentBookingForm'

class Assistant extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let servicesList = [];
    if (this.props.assistant.household) {
      servicesList.push("Household help");
    }
    if (this.props.assistant.driver) {
      servicesList.push("Driver");
    }
    if (this.props.assistant.companion) {
      servicesList.push("Companionship");
    }

    let renderServices;
    if (servicesList){
      renderServices = servicesList.map(service => {
        return(
          <li>{service}</li>
        );
      });
    }

    return(
      <div className="Assistant">
        <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
        <img src={this.props.assistant.image_url} id="profile-photo"/>
        <h3>Services Offered:</h3>
          <ul>
            {renderServices}
          </ul>
        <h3>Calendar:</h3>
          <p>Future calendar of availability may go here.</p>
      </div>
    );
  }
}


export default Assistant;
