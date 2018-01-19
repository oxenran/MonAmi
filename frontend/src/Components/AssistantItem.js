import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class AssistantItem extends React.Component {
  render(){
    return(

      <div className="AssistantItemStyle">
        <ul>
          <li>
            <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
          </li>
          <li><Link to={`/assistants/${this.props.assistant.id}`}><Image src={this.props.assistant.image_url} className="img-thumbnail responsive"></Image></Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default AssistantItem;
