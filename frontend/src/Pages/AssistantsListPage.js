import React, { Component } from 'react';
import AssistantItem from '../Components/AssistantItem.js';
import AssistantsList from '../Components/AssistantsList.js';
import ServicesCheckbox from '../Components/ServicesCheckbox.js';
import { Image, Col, Checkbox } from 'react-bootstrap';

const services = {
  household: {
    name: 'Household Help',
    url: 'https://i.imgur.com/rKNTItm.png'
    // 'https://openclipart.org/image/2400px/svg_to_png/28497/purzen-House-icon.png'
  },
  driver: {
    name: 'Driver',
     url: 'https://i.imgur.com/VWX926l.png'
     // 'https://cdn3.iconfinder.com/data/icons/car-maintenance-icons/348/Carpool-512.png'
  },
  companion: {
    name: 'Companion',
    url: 'https://i.imgur.com/pH3yzSa.png'
     // 'http://sewendehemel.co.za/wp-content/uploads/2016/03/sharing.jpg'
  }
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
    console.log("Changing state of service"+this.state[service]);
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
    const iconClass = this.state[service] ? "icon-checked img-thumbnail" : "img-thumbnail"
    return (
      <Col sm={2} md={4} lg={4}>
      <div key={service}>
        <Image src={services[service].url} alt="service icon"  className={iconClass} id="find-assistant-icon" onClick={() => this.toggleService(service)}>
        </Image>
        <Checkbox inline className="hidden"
          checked={this.state[service]}>
        </Checkbox>
      </div>
      </Col>
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
        <Col sm={12} lg={10}>
        {this.createCheckboxes()}
        </Col>
        <AssistantsList assistants={this.state.assistants} />
      </div>
    );
  }
}

export default AssistantsListPage;
