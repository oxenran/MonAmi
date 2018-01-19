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

    <nav className="navbar navbar-toggleable-md navbar-light">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#"></a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
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
      </div>
      </div>
    </nav>
  </header>
  )
  }
}

export default Header;
