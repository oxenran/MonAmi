import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';
import App from '../App';
import { Button, FormGroup, Form, FormControl, Col, ControlLabel } from 'react-bootstrap';

class AppointmentBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm = () => {
  document.getElementById("appointment-booking-form").reset();
  }

  handleSubmit(event) {
    event.preventDefault();

    const date = event.target[0].value;
    const time = event.target[1].value;
    const dateTime = `${date}T${time}:00Z`;

    // 2018-01-31T09:00:00Z
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
    fetch('http://monamibackend.us-west-2.elasticbeanstalk.com/appointments/', {
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
      <Col className="appointment-booking-form">
        <h3 className="text-left">Book an Appointment</h3>
      <Form inline onSubmit={this.handleSubmit} id="appointment-booking">
        <FormGroup controlId="formInlinedate">
          <Col componentClass={ControlLabel} sm={4} lg={2}>
            Date
          </Col>
          <FormControl type="date" />
        </FormGroup>

        <FormGroup controlId="formInlinetime">
          <Col componentClass={ControlLabel} sm={4} lg={2}>
            Time
          </Col>
          <FormControl type="time" />
        </FormGroup>

        <FormGroup controlId="formInlinedetails">
          <Col componentClass={ControlLabel} sm={8} lg={4}>
            Details
          </Col>
          <FormControl type="text" />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Book!</Button>
      </Form>
      </Col>


    );
  }
}

export default AppointmentBookingForm;


<form onSubmit={this.handleSubmit} id="appointment-booking-form">
  <h3 className="text-left">Book an Appointment</h3>
  <label htmlFor="date">Date</label>
  <input id="date" name="date" type="date" />

  <label htmlFor="date">Time</label>
  <input id="time" name="time" type="time" />

  <label htmlFor="details">Details</label>
  <input id="details" name="details" type="text" />

  <Button bsStyle="primary" type="submit">Book!</Button>
</form>
