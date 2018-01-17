import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogButton extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    const token = '';
    alert(`Successfully logged out!`);
    this.props.onLogin(token);
  }

  render() {
    if (this.props.getToken()) {
      return (
        <button type="button" className="logout" onClick={this.handleLogout}>Logout</button>
      )
    } else {
      return (
        <button><Link to='/Login'>Log In</Link></button>

      )
    }
  }
}

export default LogButton;
