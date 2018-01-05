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
    fetch('https://randomuser.me/api/?results=30').then(results => {
      return results.json();
    }).then(data=> {
      let assistants = data.results;
      this.setState({assistants: assistants});
      console.log("state", this.state.assistants);
    });
      // this.setState({assistants: assistants});
      // console.log("state", this.state.assistants);

    //   let assistants = data.results.map((assistant)=> {
    //     return(
    //       <div key={assistant.results}>
    //         <img src={pic.picture.medium} />
    //       </div>
    //     )
    //   })
    //   this.setState({assistants: assistants});
    //   console.log("state", this.state.assistants);
    // })
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
