import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
// import AssistantsList from './AssistantsList';
import AssistantsListPage from '../Pages/AssistantsListPage';
import Login from './Login';
import BecomeAssistant from './BecomeAssistant';
import Signup from './Signup';
import AssistantViewPage from '../Pages/AssistantViewPage';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Assistants' component={AssistantsListPage}/>
      <Route path='/Assistants/:id' component={AssistantViewPage}/>
      <Route path='/BecomeAssistant' component={BecomeAssistant}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/Login' component={Login}/>
    </Switch>
  </main>
)

export default Main;
