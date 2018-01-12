import React, { Component } from 'react';
import Assistant from '../Components/Assistant';
import AppointmentBookingForm from '../Components/AppointmentBookingForm';

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
  }
  componentDidMount(){
    let url = this.props.match.url;
    // let url = this.state.assistant.id;
    fetch(`http://localhost:8000${url}/`).then(response => response.json())
      .then(data => this.setState({assistant: data}));

  }
  render() {
    return(
      <div className="AssistantsViewPage">
        <h2>Individual Assistant Page</h2>
        <Assistant assistant={this.state.assistant} />
        <AppointmentBookingForm assistant={this.state.assistant} />
      </div>
    );
  }
}

export default AssistantViewPage;
