import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class LogButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleLogout() {
    // if (!this.props.getToken()) {
      this.props.onLogin('');
    //   this.props.history.replace('/Home');
    // }else{
    //   this.props.history.replace('/Login');
    // }
  }

  render() {
    if (this.props.getToken()) {
      return (
        <Button type="button" className="logout" onClick={this.handleLogout.bind(this)} onLogin={this.props.onLogin}>Logout</Button>
      )
    } else {
      return (
        <Button><Link to='/Login'>Log In</Link></Button>

      )
    }
  }
}

export default LogButton;
