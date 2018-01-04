import React, { Component } from 'react';
import {AssistantItem} from './AssistantItem.js';

class AssistantsList extends React.Component {
  render(){
    let assitantItems;
    if (this.props.assistantsList){
      assistantItems = this.props.assistantsList.map(assistant =>
      console.log(assistant);
      return(
        <AssistantItem key={assistant.id} assistant={assistant} />
      )
      )};

    return(
      <div className="AssistantsList">
      Category Selection boxes will go here
      Assistants search results will go here
      {assistantItems}
      </div>
    )
  }
}

export default AssistantsList;
