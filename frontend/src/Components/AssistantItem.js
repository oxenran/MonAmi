import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class AssistantItem extends React.Component {
  render(){
    return(

      <div key={this.props.assistant.id} className="AssistantItemStyle">
        <ul>
          <li>
            <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
          </li>
          <li><Link to={`/assistants/${this.props.assistant.id}`}><div style={{backgroundImage: `url(${this.props.assistant.image_url})`}} alt="Assistant photo" className="img-thumbnail responsive rounded-images"  id="image-fix" ></div></Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default AssistantItem;
