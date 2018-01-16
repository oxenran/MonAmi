import React, { Component } from 'react';

class Signup extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // clearForm = () => {
  // document.getElementById("new-assistant-form").reset();
  // }

  handleSubmit(event) {
    event.preventDefault();
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
    console.log(event.target);
    // const data = new FormData(event.target);
    const data = {
      "username": event.target[0].value,
      "password": event.target[1].value,
      "first_name": event.target[2].value,
      "last_name": event.target[3].value,
      "email": event.target[4].value,
      "image_url": event.target[5].value
    }
    console.log(data);

    fetch('http://localhost:8000/users/', { //does this url need to be updated to send a user as an elderly user?
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });

    // this.clearForm();
  }

  render(){
    return(
      <div className="Signup">
        <h2>Sign Up for Our Services</h2>
        <h3>We are happy to provide you the assistance that you need!</h3>
        <h4>Simply fill out the form below to get started.</h4>
        <form onSubmit={this.handleSubmit} id="new-assistant-form">

          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <label htmlFor="first_name">First Name</label>
          <input id="first_name" name="first_name" type="text" />

          <label htmlFor="last_name">Last Name</label>
          <input id="last_name" name="last_name" type="text" />

          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="image_url">Enter the image url for your profile photo</label>
          <input id="image_url" name="image_url" type="text" />

          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default Signup;
