import React from 'react';
import { Link } from "react-router-dom";
import pursuitLogo from "../assets/pursuit.png";
import williamsImg from "../assets/williams.png";
import cephusImg from "../assets/cephus.png";
import javierImg from "../assets/javier.png";
import emmanuelImg from "../assets/emmanuel.png";
import { Container, Row, Col } from 'react-bootstrap';

const OurFooter = () => {
  return (
    <Container fluid style={{ backgroundColor: '#343a40', color: '#fff', marginTop: 'auto' }} className="pt-3 pb-3">
      <Row className="justify-content-center">
        <Col md={2} className="text-center">
          <a href="https://github.com/ninajavier" className="text-light">
            <img src={javierImg} alt="Developer Nina" height="100" />
          </a>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/theCephusHasLanded" className="text-light">
            <img src={cephusImg} alt="Developer Christina" height="100" />
          </a>
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
          <a href="https://github.com/keriarmstrong" className="text-light">
            <img src={emmanuelImg} alt="Developer Keri" height="100" />
          </a>
        </Col>
        <Col md={2} className="text-center">
          <a href="https://github.com/laura-williams-1" className="text-light">
            <img src={williamsImg} alt="Developer Laura" height="100" />
          </a>
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
