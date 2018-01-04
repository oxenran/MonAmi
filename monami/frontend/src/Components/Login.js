import React, { Component } from 'react';


class Login extends React.Component {
  render(){
    return(
      <div className="Login">
        <h2>Log Into Your Account</h2>

        <h4>Insert (Elderly) form component here</h4>

        <aside>
          <h4>Optional: Are you an Assistant?  Click here to Login</h4>
          <p> Assistant Login form pops up as modal or we direct to that link</p>
        </aside>
      </div>
    )
  }
}

export default Login;
