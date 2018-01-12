import React, { Component } from 'react';
import AuthService from './AuthService';

//Export a function withAuth which takes a AuthComponent as a parameter
export default function withAuth(AuthComponent) {
  // Instantiate AuthService
  const Auth = new AuthService('http://localhost:8000/');
  // Return a class AuthWrapped in which auth is handled
  return class AuthWrapped extends React.Component {
  // Add contructor to class and initialize its state with user as null
    constructor() {
      super();
      this.state = {
        user: null
      }
      console.log(this.state);
    }
    // Add componentWillMount hook which checks the auth
    componentWillMount() {
      if (!Auth.loggedIn()) {
        // this.props.history.replace('/login')
      }
      else {
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        }
        catch(err){
          Auth.logout()
          this.props.history.replace('/login')
        }
      }
    }
    render() {
      //if user exists, pass the component to other the other component
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      }
      else {
        return null
      }
    }
  }
}
