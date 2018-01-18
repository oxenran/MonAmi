import React, { Component } from 'react';
import ReactBootstrap from 'ReactBootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
    this.OnLoginFn = this.OnLoginFn.bind(this);
    this.getToken = this.getToken.bind(this);
  }
  OnLoginFn(logintoken){
    //make it take the token
    this.setState( {
      token: logintoken
    })
    console.log("App OnLoginFn was called");
  }

  getToken() {
    console.log('In get token');
    console.log(this.state.token);
    return this.state.token;
  }

  render(){
    return(
    <div>
      <Header onLogin={this.OnLoginFn} getToken={this.getToken}/>
      <Main onLogin={this.OnLoginFn} getToken={this.getToken}/>
    </div>
    )
  }
}

export default App;
