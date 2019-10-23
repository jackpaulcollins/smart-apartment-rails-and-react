import React from "react";
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


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
            <Modal.Title>Reset Your Date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="Who was fat?" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Jack</Dropdown.Item>
              <Dropdown.Item eventKey="2">Pete</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          </Modal.Body>
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