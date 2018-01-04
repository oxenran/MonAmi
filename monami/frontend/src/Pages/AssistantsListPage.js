import React, { Component } from 'react';
import AssistantItem from '../Components/AssistantItem.js';
import AssistantsList from '../Components/AssistantsList.js';

class AssistantsListPage extends React.Component {
  constructor(){
    super();
    this.state = {
      assistants: []
    }
  }
  componentWillMout(){
    //API fetching will go here (or compnentDidMount())
    this.setState({assistants: [
    {
      lastName: 'Latte',
      firstName: 'Janet'
    },
    {
      lastName: 'Roh',
      firstName: 'Ang'
    }
  ]});
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
