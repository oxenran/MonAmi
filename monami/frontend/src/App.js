import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Nav from './Components/Nav';
// import AssistantsList from './Components/AssistantsList';
// import Routing from './Routing';

// import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Mon Ami</h1>
//         </header>
//         <p className="App-intro">
//             A react app with django as a backend.
//         </p>
//         <Nav />
//         <AssistantsList />
//       </div>
//     );
//   }
// }
//
// export default App;
