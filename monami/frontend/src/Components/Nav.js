import React, { Component } from 'react';

class Nav extends React.Component {
  render(){
    return(
      <div className="Nav">
        <button id="login">Log In/Out</button>
        <button id="FindAssistants">Find Assistants</button>
        <button id="appointments">Appointments</button>
        <button id="profile">My Profile</button>
      </div>
    )
  }

}

export default Nav;
