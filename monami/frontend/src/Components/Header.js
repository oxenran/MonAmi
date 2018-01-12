import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    const token = '';
    this.props.onLogin(token);
  }
  render(){
    return(
  <header className="headerstyle">
    <h2><span><Link to='/'>Mon Ami</Link></span> - providing assistance for the elderly</h2>

    <nav className="navbar">
      <ul>
        <li> <button><Link to='/'>Home</Link></button>
        </li>
        <li> <button><Link to='/BecomeAssistant'>Become an Assistant</Link></button>
        </li>
        <li><button><Link to='/Assistants'>Find Assistant</Link></button>
        </li>
        <li> <button><Link to='/Signup'>Sign Up</Link></button>
        </li>
        <li> <button><Link to='/Login'>Log In</Link></button>
        </li>
        <li>
        <button type="button" className="logout" onClick={this.handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
  )
  }
}

export default Header;
