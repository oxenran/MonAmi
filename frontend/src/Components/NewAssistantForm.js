import React, { Component } from 'react';
import ServicesCheckbox from './ServicesCheckbox';


const services = [
'Household Help',
'Driver',
'Companion',
];

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

  createCheckbox = label => (
    <ServicesCheckbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
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
      <form onSubmit={this.handleSubmit} id="new-assistant-form">
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="image_url">Enter the image url for your profile photo</label>
        <input id="image_url" name="image_url" type="text" />

        {this.createCheckboxes()}
        <input type="submit" value="SUBMIT"></input>
      </form>
    );
  }
}

export default NewAssistantForm;