import React, { Component } from 'react';
import Assistant from '../Components/Assistant';
import AppointmentBookingForm from '../Components/AppointmentBookingForm';
import { Col } from 'react-bootstrap';

// import AssistantItem from '../Components/AssistantItem.js';
// import AssistantsList from '../Components/AssistantsList.js';

class AssistantViewPage extends React.Component {
  constructor(props){
    super(props);
    // const assistant =
    // if (!assistant) {
    //   return <div>Sorry, but that Assistant was not found</div>
    // }
    this.state = {
      assistant: {}
    }
    console.log(this.state);
    console.log(this.props);
  }
  componentDidMount(){
    let url = this.props.match.url;
    // let url = this.state.assistant.id;
    fetch(`http://monamibackend.us-west-2.elasticbeanstalk.com${url}/`).then(response => response.json())
      .then(data => this.setState({assistant: data}));

  }
  render() {
    return(
      <div className="AssistantsViewPage">
        <Assistant assistant={this.state.assistant}/>
        <Col sm={12} lg={6} className="float-right">
          <h2>About</h2>
          <p className="bio">{this.state.assistant.bio}</p>
          <AppointmentBookingForm assistant={this.state.assistant}  getToken={this.props.getToken}/>
        </Col>
      </div>
    );
  }
}

export default AssistantViewPage;
