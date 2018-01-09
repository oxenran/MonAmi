import React, { Component } from 'react';
import AssistantItem from '../Components/AssistantItem.js';
import AssistantsList from '../Components/AssistantsList.js';

class AssistantsListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      assistants: []
    }
  }
  componentDidMount(){

    fetch('http://localhost:8000/assistants/').then(response => response.json())
      .then(data => this.setState({assistants: data}));
      
  }
  render() {
    return(
      <div className="AssistantsListPage">
        <h2>Assistants List</h2>
        <AssistantsList assistants={this.state.assistants} />
      </div>
    );
  }
}

export default AssistantsListPage;
