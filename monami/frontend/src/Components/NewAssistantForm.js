import React, { Component } from 'react';

class NewAssistantForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:8000/assistants/', {
      method: 'POST',
      body: data,
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

        <button>Send data!</button>
      </form>
    );
  }
}

export default NewAssistantForm;
