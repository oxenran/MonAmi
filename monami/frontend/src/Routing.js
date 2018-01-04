//move this to .src
//Prob no longer need App.js because this file is handling where everything goes
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';

// import { BrowserRouter, Route, Link } from 'react-router-dom'

const Routing = () => (
  <Router>
    <div>
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
      <Route path="/assistants-signup" component={AssistantsList}/>
      <Route path="/login" component={AssistantsList}/>
      <Route path="/signup" component={AssistantsList}/>

    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const AssistantsList = () => (
  <div>
    <h2>Assistants</h2>
  </div>
)

export default Routing;
