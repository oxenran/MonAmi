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
          <li><Link to={`/assistants/${this.props.assistant.id}`}><Image src={this.props.assistant.image_url} alt="Assistant photo" className="img-thumbnail responsive rounded-images" ></Image></Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default AssistantItem;
