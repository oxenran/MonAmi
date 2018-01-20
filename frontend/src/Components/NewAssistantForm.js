import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col, Row } from 'react-bootstrap';


const services = [
  {name: 'Household Help', url: 'https://openclipart.org/image/2400px/svg_to_png/28497/purzen-House-icon.png'},
  {name: 'Driver', url: 'https://cdn3.iconfinder.com/data/icons/car-maintenance-icons/348/Carpool-512.png'},
  {name: 'Companion', url: 'http://sewendehemel.co.za/wp-content/uploads/2016/03/sharing.jpg'}
];

// const serviceIconURLS = [
//   'https://openclipart.org/image/2400px/svg_to_png/28497/purzen-House-icon.png'
// ]

class NewAssistantForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = service => (
    <ServicesCheckbox
      label={service.name}
      url={service.url}
      handleCheckboxChange={this.toggleCheckbox}
      key={service.name}
    />
  )

  createCheckboxes = () => (
    services.map(this.createCheckbox)
  )

  clearForm = () => {
  document.getElementById("new-assistant-form").reset();
  }

  handleSubmit(event) {
    event.preventDefault();
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
    console.log(event.target);
    // const data = new FormData(event.target);
    const token = this.props.getToken();
    const data = {
      "first_name": event.target[0].value,
      "last_name": event.target[1].value,
      "email": event.target[2].value,
      "image_url": event.target[3].value,
      "household": event.target[4].checked,
      "driver": event.target[5].checked,
      "companion": event.target[6].checked
    }
    console.log(data);

    fetch('http://localhost:8000/assistants/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': ` Token ${token}`
      },
    });

    this.clearForm();
  }

  // onChangeAction(event) {
  //   if (event == true) {
  //     event == false
  //   } else {
  //     event == true
  //   }
  // }

  render() {
    return (
      <Col md={10}>
      <Form horizontal onSubmit={this.handleSubmit} id="new-assistant-form">
        <FormGroup controlId="formHorizontalFirstName">
          <Col componentClass={ControlLabel} sm={2} lg={4}>
            First Name
          </Col>
          <Col sm={10} lg={6}>
    				<FormControl type="text" placeholder="First Name" />
    			</Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalLastName">
          <Col componentClass={ControlLabel} sm={2} lg={4}>
            Last Name
          </Col>
          <Col sm={10} lg={6}>
            <FormControl type="text" placeholder="Last Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2} lg={4}>
            Email
          </Col>
          <Col sm={10} lg={6}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalImageURL">
          <Col componentClass={ControlLabel} sm={2} lg={4}>
          Image URL
          </Col>
          <Col sm={10} lg={6}>
            <FormControl type="text" placeholder="Enter the URL of your profile photo." />
          </Col>
        </FormGroup>
        <FormGroup controlId="formServicesCheckboxes">
          <Col sm={12} lgOffset={3} lg={8}>
            {this.createCheckboxes()}
          </Col>
        </FormGroup>
          <Col sm={10} lg={6}>
            <Button bsStyle="primary" type="Submit">Submit</Button>
          </Col>
        </Form>
      </Col>
    );
  }
}

export default NewAssistantForm;
