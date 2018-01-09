import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Assistant extends React.Component {
  render(){
    return(
      <div className="Assistant">
        <h3>{this.props.assistant.first_name} {this.props.assistant.last_name}</h3>
        <img src={this.props.assistant.image_url} id="profile-photo"/>
        <button>Book!</button>
      </div>
    );
  }
}


export default Assistant;
