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

  componentWillMount() {
    console.log('inside component did mount')
    const token = this.props.getToken();
    console.log(token);
    if (!token) {
      alert("Sorry you must log in to view your dashboard");
      this.props.history.replace('/Login');
    }else{
    this.fetchData();
    }
    // console.log(this.state.appointments);
  }

  render() {

    if (this.state.appointments === []){
      return (
        <div className="dashboard-appointments-list">
          <h2>My Dashboard</h2>
          <h3>You do not have any appointments booked.</h3>
        </div>
      )
    } else {
      return(
        <div className="dashboard-appointments-list">
          <h2>My Dashboard</h2>
          <AppointmentsList appointments={this.state.appointments} />
        </div>
      );
    }
  }
}

export default Dashboard;
