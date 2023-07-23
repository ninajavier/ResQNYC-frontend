import React from "react";
import nycWideShot from "../Assest/nycWideShot.png"; // Import the image
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
      <Container
        id="containter-1"
        className="d-flex justify-content-center align-items-center vh-100"
      >
        <Row>
          <Col className="text-center">
            <h1>Welcome to ResQ NYC!</h1>
            <p>
              We're here to connect emergency service in New York City with
              those who need them.
            </p>
            <Stack gap={2}>
              <Image src={nycWideShot} alt="nyc skyscrappers " thumbnail />
              <Button className="learn-more-button" variant="success">
                {" "}
                Learn More
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container id="containter-2">
        <Row>
          <h2>Services We Provide</h2>

          <Col>
            <Stack gap={2}>
              <Card className="custom-card" border="light" bg="light">
                <Card.Title>
                  Nearest Evacuation Center during Hurricane Warning
                </Card.Title>
              </Card>
              <Card className="custom-card" border="light" bg="light">
                <Card.Title>Discover Flood Zones for Hurricanes</Card.Title>
              </Card>
            </Stack>
          </Col>
          <Col>
            <Stack gap={2}>
              <Card className="custom-card" border="light" bg="light">
                <Card.Title>
                  Connect with Nearby NewYorkers during a Crisis{" "}
                </Card.Title>
              </Card>
              <Card className="custom-card" border="light" bg="light">
                <Card.Title>
                  AI Virtual Assitance for support during distress
                </Card.Title>
              </Card>
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container id="containter-3" bg="light">
        <Card></Card>
        <Poll></Poll>
      </Container>

      <LocationModal />
    </div>
  );
};

export default Home;
