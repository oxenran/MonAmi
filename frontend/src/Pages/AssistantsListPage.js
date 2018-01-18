import React, { Component } from 'react';
import AssistantItem from '../Components/AssistantItem.js';
import AssistantsList from '../Components/AssistantsList.js';
import ServicesCheckbox from '../Components/ServicesCheckbox.js';

const services = {
  household: 'Household Help',
  driver: 'Driver',
  companion: 'Companion'
};

const URL = 'http://localhost:8000/assistants/'

class AssistantsListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      assistants: [],
      household: false,
      driver: false,
      companion: false
    }
  }
  //
  toggleService(service) {
    const update = {};
    update[service] = !this.state[service];
    this.setState(update, () => {
      console.log(this.state);
      this.fetchData();
    });
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  //
  createCheckbox = (service) => {
    return (
      <div key={service}>
        {services[service]}
        <input
          type="checkbox"
          onClick={() => this.toggleService(service)}
          checked={this.state[service]}
        />
      </div>
    )
  }

  createCheckboxes = () => {
    return Object.keys(services).map(service => {return this.createCheckbox(service)})
  }
  //
  //
  fetchData() {
    const household = this.state.household;
    const driver = this.state.driver;
    const companion = this.state.companion;

    const householdurl = household ? 'household=true' : 'household=';
    const driverurl = driver ? 'driver=true' : 'driver=';
    const companionurl = companion ? 'companion=true' : 'companion=';
    let url;
    if (!household && !driver && !companion) {
      url = URL;
    } else {
      url = `${URL}?${householdurl}&${driverurl}&${companionurl}`;
    }
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({assistants: data}));
  }
  //
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return(
      <div className="AssistantsListPage">
        <h2>Assistants List</h2>
        {this.createCheckboxes()}
        <AssistantsList assistants={this.state.assistants} />
      </div>
    );
  }
}

export default AssistantsListPage;
