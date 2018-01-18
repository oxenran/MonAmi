import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class LogButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.getToken()) {
      return (
        <Button type="button" className="logout" onClick={this.handleLogout}>Logout</Button>
      )
    } else {
      return (
        <Button><Link to='/Login'>Log In</Link></Button>

      )
    }
  }
}

export default LogButton;
