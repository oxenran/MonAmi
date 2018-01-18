import React from 'react';
import { Modal } from 'react-bootstrap';

class ModalInstance extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = { showModal: false };
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
	}

	render() {
		const popover = (
			<Popover id="modal-popover" title="popover">
				very popover. such engagement
			</Popover>
		);
		const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

		return (
			<div>
				<p>Click to get the full Modal experience!</p>

				<Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
					Launch demo modal
				</Button>

				<Modal show={this.state.showModal} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Text in a modal</h4>
						<p>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</p>

						<h4>Popover in a modal</h4>
						<p>
							there is a{' '}
							<OverlayTrigger overlay={popover}>
								<a href="#popover">popover</a>
							</OverlayTrigger>{' '}
							here
						</p>

						<h4>Tooltips in a modal</h4>
						<p>
							there is a{' '}
							<OverlayTrigger overlay={tooltip}>
								<a href="#tooltip">tooltip</a>
							</OverlayTrigger>{' '}
							here
						</p>

						<hr />

						<h4>Overflowing text to show scroll behavior</h4>
						<p>
							Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ModalInstance;
