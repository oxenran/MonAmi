import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail, Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import dateFormat from 'dateformat';

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
    // 2018-01-30T09:00:00Z
    let appointmentDate = new Date (this.props.appointment.date);
    // let day = appointmentDate.getDay();
    // let date = appointmentDate.getDate();
    // let month = appointmentDate.getMonth();
    // let year = appointmentDate.getFullYear();
    // let time = appointmentDate.getTime();
    // // let time =
    let dateString = dateFormat(appointmentDate, "dddd, mmmm, yyyy, h:mm TT", true);
    return(
      <Grid>
		    <Row>
    			<Col xs={6} md={4}>
    				<Image src={this.state.assistant.image_url} alt="assistant profile photo"  className="img-thumbnail circle responsive" id="profile-photo" >
            </Image>
          </Col>
          <Col xs={6} md={6}>
              <h1>{dateString}</h1>
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
