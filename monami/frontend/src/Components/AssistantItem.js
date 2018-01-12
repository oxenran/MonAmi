import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AssistantItem extends React.Component {
  render(){
    return(

      <div className="AssistantItemStyle">
        <ul>
          <li>
            <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
          </li>
          <li><Link to={`/assistants/${this.props.assistant.id}`}><img src={this.props.assistant.image_url} /></Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default AssistantItem;
