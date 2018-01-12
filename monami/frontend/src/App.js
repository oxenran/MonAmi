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
  }
  OnLoginFn(){
    //make it take the token
    this.setState( {
      token: this.state.token
    })
    console.log("App OnLoginFn was called");
  }

  // OnLoginFn = (tokenFromLogin) => {
  //   this.setState() {
  //
  //   }
  // }

  render(){
    return(
    <div>
      <Header />
      <Main onLogin={this.OnLoginFn.bind(this)}/>
    </div>
    )
  }
}

// export default withAuth(App);
export default App;
