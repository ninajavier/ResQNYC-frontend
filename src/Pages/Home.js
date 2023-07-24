import React from "react";
import nycWideShot from "../Assets/nyc-1.jpeg";
import familyPic from "../Assets/black-family-1024x683.jpeg";
import { Link } from "react-router-dom";

import "../css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Stack,
  Card,
} from "react-bootstrap";
import LocationModal from "../Components/LocationModal";
import Poll from "../Components/Poll";

const Home = () => {
  return (
    <div>
      <div
        id="container-1"
        className="text-center mt-5 p-3"
        style={{ backgroundColor: "#fdf0d5", color: "#D81E5B" }}
      >
        <h1 className="mt-5">Welcome to ResQ NYC!</h1>
        <p>
          We're here to connect emergency service in New York City with those
          who need them.
        </p>
        <Image
          src={nycWideShot}
          width={500}
          height="default"
          className="mt-5"
        />
        <span></span>
        <Link to="/about">
          <Button
            className="learn-more-button d-block text-center mx-auto mt-3"
            style={{ backgroundColor: "#331882" }}
          >
            {" "}
            Learn More{" "}
          </Button>
        </Link>
      </div>
      <div
        id="container-2"
        className="pt-5 pb-5"
        style={{ backgroundColor: "#C6D8D3", color: "#fff" }}
      >
        <h2 className="mb-2 text-center">Services We Provide</h2>
        <Row>
          <Col>
            <Stack gap={2}>
              <Card
                className="custom-card pb-2 pt-2 text-center"
                border="light"
                bg="light"
                style={{ backgroundColor: "#b081dc" }}
              >
                <Card.Title>
                  Nearest Evacuation Center during Hurricane Warning
                </Card.Title>
              </Card>
              <Card
                className="custom-card pb-2 pt-2 text-center"
                border="light"
                bg="light"
                style={{ backgroundColor: "#b081dc" }}
              >
                <Card.Title>Discover Flood Zones for Hurricanes</Card.Title>
              </Card>
            </Stack>
          </Col>
          <Col>
            <Stack gap={2}>
              <Card
                className="custom-card pb-2 pt-2 text-center"
                border="light"
                bg="light"
                style={{ backgroundColor: "#8b62aa" }}
              >
                <Card.Title>
                  Connect with Nearby New Yorkers during a Crisis
                </Card.Title>
              </Card>
              <Card
                className="custom-card pb-2 pt-2 text-center"
                border="light"
                bg="light"
                style={{ backgroundColor: "#8b62aa" }}
              >
                <Card.Title>
                  AI Virtual Assistance for support during distress
                </Card.Title>
              </Card>
            </Stack>
          </Col>
        </Row>
      </div>
      <div
        id="container-3"
        className="p-3 "
        style={{ backgroundColor: "#fdf0d5", color: "#D81E5B" }}
      >
        <Row>
          <Col md={6}>
            <Image className="family" src={familyPic} fluid />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Poll />
          </Col>
        </Row>
      </div>
      <LocationModal />
    </div>
  );
};

export default Home;
