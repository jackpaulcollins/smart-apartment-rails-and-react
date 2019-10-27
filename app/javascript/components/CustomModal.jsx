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
    this.state = {
      personToReset: null,
      newDate: ''
    };
    this.selectPerson = this.selectPerson.bind(this);
  }

  selectPerson(person){
    this.setState({
      personToReset: person,
      newDate: this.getDate()
    })
  }

  getDate(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
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
              <Dropdown.Item eventKey="1" onClick={()=> this.selectPerson('Jack')}>Jack</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=> this.selectPerson('Pete')}>Pete</Dropdown.Item>
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