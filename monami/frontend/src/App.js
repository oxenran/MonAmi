import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import AuthService from './Components/AuthService';
import withAuth from './Components/withAuth';
const Auth = new AuthService();

class App extends React.Component {


  render(){
    return(

    <div>
      <Header />
      <Main />
    </div>
    )
  }
}

// export default withAuth(App);
export default App;
