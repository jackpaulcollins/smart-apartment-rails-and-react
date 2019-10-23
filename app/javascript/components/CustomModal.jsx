import React from "react";
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.toggleModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func
} 


export default CustomModal;