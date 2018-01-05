import React, { Component } from 'react';

class NewAssistantForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target);
    const data = {
      "first_name": event.target[0].value,
      "last_name": event.target[1].value,
      "email": event.target[2].value
    }
    console.log(data);

    fetch('http://localhost:8000/assistants/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default NewAssistantForm;
