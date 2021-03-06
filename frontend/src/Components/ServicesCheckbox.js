import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Col, Checkbox, Image } from 'react-bootstrap';

class ServicesCheckbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    console.log("Changing state of isChecked to:"+!this.state.isChecked)
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label, url } = this.props;   //same as const label = this.props.label; const { url } = this.props;
    const { isChecked } = this.state;
    const iconClass = isChecked ? "icon-checked img-thumbnail circle responsive left-margin" : "img-thumbnail circle responsive left-margin"

    return (
        <Col componentClass={ControlLabel} className="container-service-icon">
          <label>
          <Image src={url} alt="service icon"  className={iconClass} id="service-icon" onClick={this.toggleCheckboxChange} />
          <Checkbox inline className="hidden" checked={isChecked}>
          </Checkbox>
          </label>
        </Col>

    );
  }
}

export default ServicesCheckbox;
