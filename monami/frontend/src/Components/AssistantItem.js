import React, { Component } from 'react';

class AssistantItem extends React.Component {
  render(){
    return(
      <li className="AssistantItem">
      {this.props.assistant.firstName} {this.props.assistant.lastName}
      </li >
    );
  }
}

export default AssistantItem;
