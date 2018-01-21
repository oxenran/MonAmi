import React, { Component } from 'react';
import AssistantItem from './AssistantItem.js';
import { Col } from 'react-bootstrap';

class AssistantsList extends React.Component {

  render() {
    let assistantItems;
    if (this.props.assistants){
      assistantItems = this.props.assistants.map(assistant => {
      return(
        <AssistantItem key={assistant.id} assistant={assistant} />
      );
    });
    }
    return(
      <Col sm={12}lg={12}>
      <div className="AssistantsList">
      {assistantItems}
      </div>
      </Col>
    );
  }
}

export default AssistantsList;
