import React, { Component } from 'react';
import AssistantItem from './AssistantItem.js';

class AssistantsList extends React.Component {

  render() {
    let assistantItems;
    if (this.props.assistants){
      assistantItems = this.props.assistants.map(assistant => {
      return(
        <AssistantItem key={assistant.id} assistant={assistant} />
      );
      // return(
      //   <AssistantItem key={assistant.lastName} assistant={assistant} />
      // );
    });
    }
    return(
      <div className="AssistantsList">
      <p>Category Selection boxes will go here</p>
      <p>Assistants search results: </p>
      {assistantItems}
      </div>
    );
  }
}

export default AssistantsList;
