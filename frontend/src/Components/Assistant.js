import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppointmentBookingForm from './AppointmentBookingForm'
import { Image } from 'react-bootstrap';

class Assistant extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let servicesList = [];
    if (this.props.assistant.household) {
      servicesList.push('https://i.imgur.com/rKNTItm.png');
    }
    if (this.props.assistant.driver) {
      servicesList.push('https://i.imgur.com/VWX926l.png');
    }
    if (this.props.assistant.companion) {
      servicesList.push('https://i.imgur.com/pH3yzSa.png');
    }

    let renderServices;
    if (servicesList){
      renderServices = servicesList.map(service => {
        return(
          <img src={service} className="img-thumbnail" id="service-icon" key={service}/>
        );
      });
    }

    return(
      <div className="Assistant">
        <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
        <img src={this.props.assistant.image_url} id="profile-photo"/>
        <h3>Services Offered:</h3>
            {renderServices}
      </div>
    );
  }
}


export default Assistant;
