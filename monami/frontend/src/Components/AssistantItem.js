import React, { Component } from 'react';

class AssistantItem extends React.Component {
  render(){
    return(
      <div className="AssistantItemStyle">
        <ul>
          <li>
            {this.props.assistant.first_name} {this.props.assistant.last_name}
          </li>
        </ul>
      </div>
    );
  }
}


const AssistantItemStyle = {
  width: 200,
  height: 250,
  display: 'inline-block',
}


export default AssistantItem;
