import React from 'react';
import { Link } from "react-router-dom";
import pursuitLogo from "../assets/pursuit.png"
import { Container, Row, Col } from 'react-bootstrap';

const OurFooter = () => {
  return (
    <Container fluid style={{backgroundColor: '#343a40', color: '#fff', marginTop: 'auto'}} className="pt-3 pb-3">
      <Row className="justify-content-center">
        <Col md={2} className="text-center">
          <a href="https://github.com/ninajavier" className="text-light">Developer Nina</a>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/theCephusHasLanded" className="text-light">Developer Christina</a>
        </Col>
        <Col md={2} className="text-center">
          <h2>Copyright 2023</h2>
        </Col>
        <Col md={2} className="text-center">
          <Link to="https://www.pursuit.org/" className="text-white">
            Built in
            <img src={pursuitLogo} alt="Pursuit Logo" height="40" />
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/keriarmstrong" className="text-light">Developer Keri</a>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/laura-williams-1" className="text-light">Developer Laura</a>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={2} className="text-center">
          <a href="https://trello.com/b/1Q8OaaX4/hackathon-team-2" className="text-light">Our Trello</a>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/ninajavier/ResQNYC-frontend" className="text-light">Frontend Repo</a>
        </Col>
        <Col md={2} className="text-center">
          {/* Add your backend repository link here */}
          <a href="https://github.com/ninajavier/ResQNYC-backend" className="text-light">Backend Repo</a>
        </Col>
      </Row>
    </Container>
  );
};

export default OurFooter;
