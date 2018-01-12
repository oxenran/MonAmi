import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
// import AuthService from './Components/AuthService';
// import withAuth from './Components/withAuth';

// const Auth = new AuthService();

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
    return this.state.token;
  }

  render(){
    return(
    <div>
      <Header />
      <Main onLogin={this.OnLoginFn} getToken={this.getToken}/>
    </div>
    )
  }
}

// export default withAuth(App);
export default App;
