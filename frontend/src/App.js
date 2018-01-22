import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
    this.OnLoginFn = this.OnLoginFn.bind(this);
    this.getToken = this.getToken.bind(this);
    this.OnLogOut = this.OnLogOut.bind(this);
  }
  OnLoginFn(logintoken){
    //make it take the token
    this.setState( {
      token: logintoken
    })
    localStorage.setItem('token', logintoken);
    console.log("App OnLoginFn was called");
  }

  OnLogOut() {
    console.log("App OnLogOut was called");
    this.setState( {
      token: ''
    })
    localStorage.removeItem('token');
  }
  //need to separate this to make a separate log out function

  getToken() {
    console.log('In get token');
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  render(){
    return(
    <div>
      <Header onLogin={this.OnLoginFn} getToken={this.getToken} onLogout={this.OnLogOut}/>
      <Main onLogin={this.OnLoginFn} getToken={this.getToken}/>
      <footer className="footer">
        by Roxanne Agerone and Kimberley Zell
      </footer>
    </div>
    )
  }
}

export default App;
