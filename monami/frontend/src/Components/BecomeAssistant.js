import React, { Component } from 'react';
import NewAssistantForm from './NewAssistantForm'


class BecomeAssistant extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    console.log('inside component did mount')
    const token = this.props.getToken();
    console.log(token);
    if (!token) {
      alert(`Sorry you must log in or sign up to become an assistant.`);
      this.props.history.replace('/Login');
    }
  }

  render(){
    return(
      <div className="BecomeAssistant">
        <h2>Become an Assistant</h2>
        <h3>So, you'd like to be an Assistant with us?  That's Great!</h3>
        <h4>Simply fill out the detailed form below and we will get back to you once you have been approved</h4>
        <NewAssistantForm getToken={this.props.getToken} />
      </div>
    )
  }
}

export default BecomeAssistant;
