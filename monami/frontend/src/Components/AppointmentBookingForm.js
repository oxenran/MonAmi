// import React, { Component } from 'react';
// import ServicesCheckbox from './ServicesCheckbox';
//
// class AppointmentBookingForm extends React.component {
//   constructor() {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentWillMount = () => {
//     this.selectedCheckboxes = new Set();
//   }
//
//   toggleCheckbox = label => {
//     if (this.selectedCheckboxes.has(label)) {
//       this.selectedCheckboxes.delete(label);
//     } else {
//       this.selectedCheckboxes.add(label);
//     }
//   }
//
//   createCheckbox = label => (
//     <ServicesCheckbox
//       label={label}
//       handleCheckboxChange={this.toggleCheckbox}
//       key={label}
//     />
//   )
//
//   createCheckboxes = () => (
//     services.map(this.createCheckbox)
//   )
//
//   // clearForm = () => {
//   // document.getElementById("new-assistant-form").reset();
//   // }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     for (const checkbox of this.selectedCheckboxes) {
//       console.log(checkbox, 'is selected.');
//     }
//     console.log(event.target);
//
//     const data = {
//       "date": event.target[0].value,
//       "time": event.target[1].value,
//       "household": event.target[4].checked,
//       "driver": event.target[5].checked,
//       "companion": event.target[6].checked
//     }
//     console.log(data);
//
//     fetch('http://localhost:8000/assistant/appointment/', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8'
//       },
//     });
//
//     // this.clearForm();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} id="new-assistant-form">
//         <label htmlFor="date">Date</label>
//         <input id="date" name="date" type="date" />
//
//         <label htmlFor="time">Time</label>
//         <input id="time" name="time" type="time" />
//
//         {this.createCheckboxes()}
//         <input type="submit" value="BOOK"></input>
//       </form>
//     );
//   }
// }
//
// export default AppointmentBookingForm;
