import React, { Component } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import { Form, FormControl, Button } from 'react-bootstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLogin = this.props.onLogin;
  }

  clearForm = () => {
    document.getElementById("login-form").reset();
  }

  handleSubmit(event) {
    event.preventDefault();
    // for (const checkbox of this.selectedCheckboxes) {
    //   console.log(checkbox, 'is selected.');
    // }
    console.log(event.target);
    // const data = new FormData(event.target);
    const data = {
      "token": event.target[0].value,
      "username": event.target[1].value,
      "password": event.target[2].value
    }
    console.log(data);

    // var sendToken = '';
    const that = this;

    fetch(`http://localhost:8000/api-token-auth/`, {
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
      alert(`Successfully logged in as ${data.username}`);
      return response.json();
    }).then(function(responseJSON) {
      that.props.onLogin(responseJSON.token);
      that.props.history.replace('/Assistants');
    }).catch(function(error) {
      alert("Unable to log in - incorrect log in information.");
      console.log('There has been a problem with your fetch operation: ', error.message);
    });

    this.clearForm();
  }

  render(){
    // console.log(this.props.getToken());
    // if (this.props.getToken()) {
    //   alert("You are already logged in!")
    //   this.props.history.replace('/Dashboard/');
    // }
    return(
      <div className="Login">
        <h2>Log Into Your Account</h2>

        <Form inline onSubmit={this.handleSubmit} id="login-form">
          <DjangoCSRFToken/>
          <label htmlFor="username">Username</label>
          <FormControl id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <FormControl id="password" name="password" type="password" />

          <Button bsStyle="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )

  }
}

export default Login;
