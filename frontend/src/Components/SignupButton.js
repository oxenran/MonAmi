import React, { Component } from 'react';
import Button from 'react-bootstrap';
import Link from 'react-router-dom';

class SignupButton extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    if (this.props.getToken()) {
      return(
        <li> <Button><Link to='/Signup'>Sign Up</Link></Button>
        </li>
      );
    } else {
      return(
        <h5>you are logged in</h5>
      );
    }
  }
}

export default SignupButton;
