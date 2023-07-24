import React, { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ show }) => {
  return (
      <Modal show={show}>
          <Modal.Header>
              <Modal.Title><h1>Lost 🫠</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>ResQ NYC is your ultimate disaster relief app, designed to equip New Yorkers with essential resources and support in times of crisis. Our app provides offline chat support, evacuation data, and vital services, ensuring you're well-prepared for emergencies.</Modal.Body>
          <Modal.Footer>
              <Link to="/">
                  <Button variant="primary">
                      Get ResQ'd
                  </Button>
              </Link>
          </Modal.Footer>
      </Modal>
  );
};


export default ErrorModal;
