import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   data: {}
    // }
  }
  clearForm = () => {
  document.getElementById("signup-form").reset();
  }

  logUserIn(data) {
    console.log("inside loguserin");
    console.log(data);
    const that = this;
    fetch(`http://monamibackend.us-west-2.elasticbeanstalk.com/api-token-auth/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    .then(function(response) {
      if(!response.ok) {
        throw new Error('Network response was not ok.');
      }
      alert(`Successfully signed up and logged in as ${data.username}`);
      return response.json();
    }).then(function(responseJSON) {
      that.props.onLogin(responseJSON.token);
      that.props.history.replace('/Dashboard');
    }).catch(function(error) {
      alert("Unable to log in - incorrect log in information.");
      // console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("in the compnonent will receive props function");
  //   if (data) {
  //   this.logUserIn();
  //   }
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
    const that = this;
    fetch('http://monamibackend.us-west-2.elasticbeanstalk.com/users/', { //does this url need to be updated to send a user as an elderly user?
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }).then(function(response) {
      if(response.ok) {
        // this.setState({data: data});
        that.logUserIn(data);
      }
    });
    this.clearForm();
    // this.setState({data: data});
    // this.logUserIn();
  }

  render(){
    return(
      <div className="Signup">
        <h2>Sign Up!</h2>
        <h4 className="text-left">Enter a username and password to get started on our site.</h4>
        <form onSubmit={this.handleSubmit} id="signup-form">

          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" />

          <Button bsStyle="primary" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Signup;
