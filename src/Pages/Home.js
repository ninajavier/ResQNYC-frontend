import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LocationModal from '../Components/LocationModal';

const Home = () => {
  return (
    <div>
        <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
            <Col>
            <h1>Welcome to ResQ NYC!</h1>
            <p>
                We're here to connect emergency service in New York City with those who need them.
            </p>
            </Col>
        </Row>
        </Container>
    
    
      <LocationModal />
    </div>
  )
}

export default Home
