import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chatbot from '../Components/Chatbot';


const Home = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center vh-100 home-container">
        <Row>
          <Col className="home-content">
            <h1>ResQ NYC</h1>
            <h3>Embrace the Future Conquer the Climate</h3>
            <p>
              We're here to connect emergency service in New York City with those who need them.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="chatbot-container">
        <Chatbot />
      </Container>

    </div>
  );
};

export default Home;
