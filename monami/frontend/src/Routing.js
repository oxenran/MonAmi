//move this to .src
//Prob no longer need App.js because this file is handling where everything goes
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import AssistantsList from './Components/AssistantsList';

// import { BrowserRouter, Route, Link } from 'react-router-dom'

const Routing = () => (
  <Router>
    <div className="banner">
      <h2> Mon Ami </h2>
      <nav>
      <ul>
      <li><Link to="/">Mon Ami Home</Link></li>
      <li><Link to="/assistants">Get an Assistant</Link></li>
      <li><Link to="/assistant-signup">Become an Assistant</Link></li>
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/assistants" component={AssistantsList}/>
      <Route path="/assistant-signup" component={App}/>
      <Route path="/login" component={App}/>
      <Route path="/signup" component={App}/>

      </nav>
    </div>
  </Router>
)


export default Routing;
