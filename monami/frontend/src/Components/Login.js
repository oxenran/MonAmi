import React, { Component } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import AuthService from './AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
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
      "token": event.target[0].value,
      "username": event.target[1].value,
      "password": event.target[2].value
    }
    console.log(data);

    // fetch(`http://localhost:8000/api-token-auth/`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   },
    // });
    this.setState(
      {
        "token": data.token,
        "username": data.username,
        "password":data.password
      }
    )
    this.Auth.login(this.state.username,this.state.password)
      .then(res =>{
        this.props.history.replace('/');
      })
      .catch(err =>{
        alert(err);
    })
    // this.clearForm();
  }

  render(){
    return(
      <div className="Login">
        <h2>Log Into Your Account</h2>

        <form onSubmit={this.handleSubmit} id="login-form">
          <DjangoCSRFToken/>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          <input type="submit" value="SUBMIT"></input>
        </form>

        <aside>
          <h4>Optional: Are you an Assistant?  Click here to Login</h4>
          <p> Assistant Login form pops up as modal or we direct to that link</p>
        </aside>
      </div>
    )

  }
}

export default Login;
