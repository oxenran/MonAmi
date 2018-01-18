import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogButton from './LogButton';
import { Button } from 'react-bootstrap';


// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor(props){
    super(props)

  }



  render(){

    return(
  <header className="headerstyle">
    <h2><span><Link to='/'>Mon Ami</Link></span> - providing assistance for the elderly</h2>

    <nav className="navbar">
      <ul>
        <li> <Button><Link to='/'>Home</Link></Button>
        </li>
        <li> <Button><Link to='/BecomeAssistant'>Become an Assistant</Link></Button>
        </li>
        <li> <Button><Link to='/Dashboard'>Dashboard</Link></Button>
        </li>
        <li><Button><Link to='/Assistants'>Find Assistant</Link></Button>
        </li>
        <li> <Button><Link to='/Signup'>Sign Up</Link></Button>
        </li>
        <li> <LogButton onLogin={this.props.onLogin} getToken={this.props.getToken}/>
        </li>
      </ul>
    </nav>
  </header>
  )
  }
}

export default Header;
