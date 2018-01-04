import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <h2><strong><Link to='/'>Mon Ami</Link></strong> - providing assistance for the elderly</h2>
    <nav>
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
      </ul>
    </nav>
  </header>
)

export default Header;
