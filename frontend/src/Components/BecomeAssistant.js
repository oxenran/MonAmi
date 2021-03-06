import React, { Component } from 'react';
import NewAssistantForm from './NewAssistantForm';
import { Col } from 'react-bootstrap';

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

    return(
      <Col sm={12} lg={10}>
        <div className="BecomeAssistant">
          <h2>Become an Assistant</h2>
          <h3>So, you'd like to be an Assistant with us?  That's Great!</h3>
          <h4>Simply fill out the detailed form below and we will get back to you once you have been approved</h4>
        </div>
        <NewAssistantForm getToken={this.props.getToken} />
      </Col>
    )
  }
}

export default BecomeAssistant;
