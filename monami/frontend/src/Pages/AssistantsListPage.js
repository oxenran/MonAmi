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
    //API fetching will go here (or compnentDidMount())
  //   this.setState({assistants: [
  //   {
  //     lastName: 'Latte',
  //     firstName: 'Janet'
  //   },
  //   {
  //     lastName: 'Roh',
  //     firstName: 'Ang'
  //   }
  // ]});
    fetch('http://localhost:8000/assistants/').then(results => {
      return results.json();
    }).then(data=> {
      let assistants = data.results;
      this.setState({assistants: assistants});
      console.log("state", this.state.assistants);
    });
      
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
