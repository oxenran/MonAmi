import React, { Component } from 'react';

class AssistantItem extends React.Component {
  render(){
    return(
      <li className="AssistantItem">
        <img src={this.props.assistant.picture.medium} />
        <p>{this.props.assistant.login.username}</p>
      </li>
    );
  }
}

export default AssistantItem;
