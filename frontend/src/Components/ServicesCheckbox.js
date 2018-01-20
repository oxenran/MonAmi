import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Col, Checkbox, Image } from 'react-bootstrap';

class ServicesCheckbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

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


    return (
      <FormGroup controlId="formServicesCheckboxes">
        <Col componentClass={ControlLabel} sm={4} lg={4}>
          <label>
          <Image src={url} alt="service icon"  className="img-thumbnail circle responsive" id="service-icon" />
          {label}
          <Checkbox inline checked={isChecked}
            onChange={this.toggleCheckboxChange}>
          </Checkbox>
          </label>
        </Col>
      </FormGroup>


    );
  }
}

export default ServicesCheckbox;
