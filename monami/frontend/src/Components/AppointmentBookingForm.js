import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';
// import ReactDatetime from 'react-datetime'

// const services = {
//   household: 'Household Help',
//   driver: 'Driver',
//   companion: 'Companion'
// };

class AppointmentBookingForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.assistant = this.props.assistant;
  }

  // componentWillMount = () => {
  //   this.selectedCheckboxes = new Set();
  // }
  //
  // toggleCheckbox = label => {
  //   if (this.selectedCheckboxes.has(label)) {
  //     this.selectedCheckboxes.delete(label);
  //   } else {
  //     this.selectedCheckboxes.add(label);
  //   }
  // }
  //
  // createCheckbox = label => (
  //   <ServicesCheckbox
  //     label={label}
  //     handleCheckboxChange={this.toggleCheckbox}
  //     key={label}
  //   />
  // )
  //
  // createCheckboxes = () => (
  //   services.map(this.createCheckbox)
  // )

  // clearForm = () => {
  // document.getElementById("new-assistant-form").reset();
  // }

  handleSubmit(event) {
    event.preventDefault();
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
    console.log(event.target);
    // console.log(this.state.token);

    const data = {
      "date": event.target[0].value,
      "assistant": this.props.assistant.id,
      "details": event.target[1].value,
      // "owner": this.state.token
      // "time": event.target[1].value,
      // "household": event.target[4].checked,
      // "driver": event.target[5].checked,
      // "companion": event.target[6].checked
    }
    console.log(data);

    fetch('http://localhost:8000/appointments/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      'Authorization': ` Token ${this.state.token}`,
    });

    // this.clearForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="appointment-booking-form">
        <label htmlFor="date">Date and Time</label>
        <input id="date" name="date" type="Datetime" />

        <label htmlFor="details">Details</label>
        <input id="details" name="details" type="text" />

        <input type="submit" value="BOOK"></input>
      </form>
    );
  }
}

export default AppointmentBookingForm;
