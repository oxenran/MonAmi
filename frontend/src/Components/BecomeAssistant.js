import React, { Component } from 'react';
import NewAssistantForm from './NewAssistantForm';


class BecomeAssistant extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      token: ''
    }
  }

  componentWillMount() {
    console.log('inside component did mount')
    const currentToken = this.props.getToken();
    this.setState({token: currentToken});

  }

  render(){
    // if (!this.state.token) {
    //   return <ModalInstance />
    // }
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
