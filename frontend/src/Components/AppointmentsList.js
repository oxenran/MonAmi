import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem.js';

class AppointmentsList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let appointmentItems;
    if (this.props.appointments){
      appointmentItems = this.props.appointments.map(appointment => {
      return(
        <AppointmentItem key={appointment.id} appointment={appointment} />
      );
      // return(
      //   <AssistantItem key={assistant.lastName} assistant={assistant} />
      // );
    });
    }
    return(
      <div className="AppointmentsList">
      <h3 className="text-left">My Appointments: </h3>
      {appointmentItems}
      </div>
    );
  }
}


export default AppointmentsList;
