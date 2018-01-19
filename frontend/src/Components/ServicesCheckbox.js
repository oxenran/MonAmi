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
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <FormGroup controlId="formServicesCheckboxes">
        <Col componentClass={ControlLabel} sm={4}>
          {label}
          <Image src="https://openclipart.org/image/2400px/svg_to_png/28497/purzen-House-icon.png" alt="service icon"  className="img-thumbnail circle responsive" id="service-icon" >
          </Image>
        </Col>
        <Col sm={10} lg={4}>
          <Checkbox inline checked={isChecked}
          onChange={this.toggleCheckboxChange}>
          </Checkbox>
        </Col>
      </FormGroup>


    );
  }
}

export default ServicesCheckbox;
