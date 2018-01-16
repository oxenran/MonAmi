import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
// import AssistantsList from './AssistantsList';
import AssistantsListPage from '../Pages/AssistantsListPage';
import Login from './Login';
import BecomeAssistant from './BecomeAssistant';
import Signup from './Signup';
import AssistantViewPage from '../Pages/AssistantViewPage';
import Dashboard from './Dashboard';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Assistants' render={(props) => (
        <AssistantsListPage {...props} getToken={this.props.getToken}/>)}/>
      <Route path='/Assistants/:id' render={(props) => (
        <AssistantViewPage {...props} getToken={this.props.getToken}/>)}/>
      <Route path='/BecomeAssistant' render={(props) => (
        <BecomeAssistant {...props} getToken={this.props.getToken}/>)}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/Login' render={(props) => (
        <Login {...props} onLogin={this.props.onLogin} getToken={this.props.getToken}/>)}/>
      <Route path='/Dashboard' render={(props) => (
        <Dashboard {...props} getToken={this.props.getToken}/>)}
        />
    </Switch>
  </main>
    )
  }
}

export default Main;
