import React, { Component } from 'react';
import AppointmentsList from './AppointmentsList';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      appointments: []
    }
  }

  fetchData() {
  const token = this.props.getToken();
  console.log('inside fetchData');
  console.log(token);
  fetch('http://localhost:8000/appointments/', {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': ` Token ${token}`
    },
  }).then(response => response.json())
  .then(data => this.setState({appointments: data}));
  }

  componentDidMount() {
    this.fetchData();
    // console.log(this.state.appointments);
  }

  render() {
    const token = this.props.getToken();
    console.log(token);
    if (!this.state.appointments){
      return (
        <h3>You do not have any appointments booked.</h3>
      )
    } else {
      return(
        <div className="dashboard-appointments-list">
          <h2>Appointments List</h2>
          <AppointmentsList appointments={this.state.appointments} />
        </div>
      );
    }
  }
}

export default Dashboard;
