import React, { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ show }) => {
  return (
      <Modal show={show}>
          <Modal.Header>
              <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>Page not found!</Modal.Body>
          <Modal.Footer>
              <Link to="/">
                  <Button variant="primary">
                      Go to Home
                  </Button>
              </Link>
          </Modal.Footer>
      </Modal>
  );
};


export default ErrorModal;
