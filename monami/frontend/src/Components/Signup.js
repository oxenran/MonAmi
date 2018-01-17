import React, { Component } from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: {}
    }
  }
  clearForm = () => {
  document.getElementById("signup-form").reset();
  }

  logUserIn() {
    console.log("inside loguserin");
    console.log(this.state.data);
    fetch(`http://localhost:8000/api-token-auth/`, {
      method: 'POST',
      body: JSON.stringify(this.state.data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    .then(function(response) {
      if(!response.ok) {
        throw new Error('Network response was not ok.');
      }
      alert(`Successfully logged in as ${this.state.data.username}`);
      return response.json();
    }).then(function(responseJSON) {
      this.props.onLogin(responseJSON.token);
      this.props.history.replace('/Dashboard');
    }).catch(function(error) {
      alert("Unable to log in - incorrect log in information.");
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("in the compnonent will receive props function");
  //   this.logUserIn();
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    const data = {
      "username": event.target[0].value,
      "password": event.target[1].value,
      // "first_name": event.target[2].value,
      // "last_name": event.target[3].value,
      "email": event.target[2].value,
      // "image_url": event.target[5].value
    }
    console.log(data);

    fetch('http://localhost:8000/users/', { //does this url need to be updated to send a user as an elderly user?
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });

    this.clearForm();
    this.setState({data: data});
    this.logUserIn();
  }

  render(){
    return(
      <div className="Signup">
        <h2>Sign Up!</h2>
        <h4>Enter a username and password to get started on our site.</h4>
        <form onSubmit={this.handleSubmit} id="signup-form">

          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" />

          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default Signup;
