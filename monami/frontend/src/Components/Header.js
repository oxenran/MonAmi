import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li> <button><Link to='/'>Home</Link></button>
        </li>
        <li><button><Link to='/Assistants'>Find Assistant</Link></button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;
