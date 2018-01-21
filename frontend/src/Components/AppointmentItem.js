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
    let dateString = dateFormat(appointmentDate, "dddd, dS mmmm yyyy h:MM TT", true);
    return(
      <article className="appointment-div">
        <Grid>
  		    <Row>
      			<Col xs={6} md={4}>
      				<Image src={this.state.assistant.image_url} alt="assistant profile photo"  className="img-thumbnail circle responsive rounded-images smaller-images" id="profile-photo" >
              </Image>
            </Col>
            <Col xs={6} md={6}>
                <h2>{dateString}</h2>
                <h3>Details:</h3>
                  <h4>{this.props.appointment.details}</h4>
      					<h3>Assistant: {this.state.assistant.first_name} {this.state.assistant.last_name}</h3>
                <h4><Link to={`/assistants/${this.props.appointment.assistant}`}>View Profile or Book Again</Link>
                </h4>
      			</Col>
          </Row>
        </Grid>
      </article>
    );
  }
}


export default AppointmentItem;
