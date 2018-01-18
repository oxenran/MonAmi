import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class AppointmentItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      assistant: {}
    }
  }

  fetchData() {
  console.log('inside fetchData');
  fetch(`http://localhost:8000/assistants/${this.props.appointment.assistant}/`, {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).then(response => response.json())
  .then(data => this.setState({assistant: data}));
  }

  componentWillMount() {
    console.log('inside component will mount');
    this.fetchData();
  }

  render(){
    return(
      <Grid>
		    <Row>
    			<Col xs={6} md={4}>
    				<Thumbnail src={this.state.assistant.image_url} alt="171x180" className="img-thumnail" id="profile-photo" >
            </Thumbnail>
          </Col>
          <Col xs={8} md={6}>
    					<h3>{this.state.assistant.first_name} {this.state.assistant.last_name}</h3>
              <ul>
                <li>{this.props.appointment.date}</li>
                <li><Link to={`/assistants/${this.props.appointment.assistant}`}>Click here to View Profile or Book Again</Link>
                </li>
              </ul>
    			</Col>
        </Row>
      </Grid>
    );
  }
}


export default AppointmentItem;
