import React, { Component } from 'react';

class AssistantItem extends React.Component {
  render(){
    return(
      <li className="AssistantItem">

        <p>{this.props.assistant.first_name} {this.props.assistant.last_name}</p>
      </li>
    );
  }
}

export default AssistantItem;
