import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';
import App from '../App';
// import ReactDatetime from 'react-datetime'

// const services = {
//   household: 'Household Help',
//   driver: 'Driver',
//   companion: 'Companion'
// };

class AppointmentBookingForm extends React.Component {
  constructor(props) {
    super(props);
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

  clearForm = () => {
  document.getElementById("appointment-booking-form").reset();
  }

  handleSubmit(event) {
    event.preventDefault();
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
    console.log(event.target);
    // console.log(this.state.token);
    const date = event.target[0].value;
    const time = event.target[1].value;
    const dateTime = `${date}T${time}:00Z`;
    // 2018-01-31T09:00:00Z
    console.log(dateTime);
    console.log(date);
    console.log(time);
    const data = {
      "date": dateTime,
      "assistant": this.props.assistant.id,
      "details": event.target[2].value,
      // "owner": this.state.token
      // "time": event.target[1].value,
      // "household": event.target[4].checked,
      // "driver": event.target[5].checked,
      // "companion": event.target[6].checked
    }
    console.log(data);

    const token = this.props.getToken();
    console.log(token);
    fetch('http://localhost:8000/appointments/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': ` Token ${token}`
      },
    });

    this.clearForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="appointment-booking-form">
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" />

        <label htmlFor="date">Time</label>
        <input id="time" name="time" type="time" />

        <label htmlFor="details">Details</label>
        <input id="details" name="details" type="text" />

        <input type="submit" value="BOOK"></input>
      </form>
    );
  }
}

export default AppointmentBookingForm;
