import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppointmentItem extends React.Component {
  render(){
    return(
      <div className="AppointmentItem">
        <h3>{this.props.appointment.assistant.first_name} {this.props.appointment.assistant.last_name}</h3>
        <img src={this.props.appointment.assistant.image_url} id="profile-photo"/>
          <ul>
            <li>{this.props.appointment.date}</li>
            <li><Link to={`/assistants/${this.props.appointment.assistant_id}`}>Click here to View Profile or Book Again</Link>
            </li>
          </ul>
      </div>
    );
  }
}


export default AppointmentItem;
