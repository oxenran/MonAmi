import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';
import App from '../App';
import { Button, FormGroup, Form, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppointmentBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm = () => {
  document.getElementById("appointment-booking").reset();
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
      "details": event.target[2].value
    }
    console.log(data);

    const token = this.props.getToken();
    console.log(token);

    const that = this;

    fetch('http://monamibackend.us-west-2.elasticbeanstalk.com/appointments/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': ` Token ${token}`
      },
    }).then(function(response) {
      console.dir(response);
      if(response.status !== 201) {
        throw new Error('Sorry, unable to book this appointment.');
      }
      alert('Successfully booked your appointment!');
      return response.json();
    }).then(function(responseJSON) {
      console.log(that.props);
      // that.props.history.replace('/Dashboard');
    }).catch(function(error) {
      alert("Unable to book - this date is unavailable.");
      console.log('There has been a problem with your fetch operation: ', error.message);
    });

    this.clearForm();
  }

  render() {
    if (!this.props.getToken()){
      return (
        <div>
        <h3>To book an appointment, please Sign Up or Log In first!</h3>
        <Button><Link to='/Signup'>Sign Up</Link></Button>
        <Button><Link to='/Login'>Log In</Link></Button>
        </div>
      )
    }
    return (
      <Col className="appointment-booking-form shadow">
        <h3 className="text-left form-add-margin">Book an Appointment</h3>
      <Form inline onSubmit={this.handleSubmit} id="appointment-booking">
        <FormGroup controlId="formInlinedate">
          <Col componentClass={ControlLabel} sm={4} lg={2} className="form-add-margin">
            Date
          </Col>
          <FormControl type="date" className="from-add-margin" />
        </FormGroup>

        <FormGroup controlId="formInlinetime">
          <Col componentClass={ControlLabel} sm={4} lg={2} className="form-add-margin">
            Time
          </Col>
          <FormControl type="time" className="form-add-margin" />
        </FormGroup>

        <FormGroup controlId="formInlinedetails" className="from-add-margin">
          <Col componentClass={ControlLabel} sm={3} lg={2} className="text-left from-add-margin">
            Details
          </Col>
          <FormControl type="text" className="input-lg"/>
        </FormGroup>
        <Col lg={12}>
        <Button className="form-add-margin text-center" bsStyle="primary" type="submit">Book!</Button>
        </Col>
      </Form>
      </Col>


    );
  }
}

export default AppointmentBookingForm;


// <form onSubmit={this.handleSubmit} id="appointment-booking-form">
//   <h3 className="text-left">Book an Appointment</h3>
//   <label htmlFor="date">Date</label>
//   <input id="date" name="date" type="date" />
//
//   <label htmlFor="date">Time</label>
//   <input id="time" name="time" type="time" />
//
//   <label htmlFor="details">Details</label>
//   <input id="details" name="details" type="text" />
//
//   <Button bsStyle="primary" type="submit">Book!</Button>
// </form>
