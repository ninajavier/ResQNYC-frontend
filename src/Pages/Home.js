import React from "react";
import nycWideShot from "../Assets/nyc-1.jpeg"; // Import the image
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
      <div id="containter-1" className="text-center mt-5 p-3">
        <h1 className="mt-5"> Welcome to ResQ NYC! </h1>
        <p>
          We're here to connect emergency service in New York City with those
          who need them.
        </p>
        <Image
          className="mt-5"
          src={nycWideShot}
          width={500}
          height="default"
        />
        <span></span>
        <Button
          className="learn-more-button d-block mx-auto mt-3"
          variant="success"
        >
          {" "}
          Learn More{" "}
        </Button>
      </div>
      <div id="containter-2" className="p-3 mt-2 mb-2">
        <h2 className="mb-2">Services We Provide</h2>
        <Row>
          <Col>
            <Stack gap={2}>
              <Card className="custom-card mb-2" border="light" bg="light">
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
              <Card className="custom-card mb-2" border="light" bg="light">
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
      </div>
      <div id="containter-3" className="p-3 mt-2 mb-2">
        {" "}
        {/* Added p-3 for padding */}
        <Poll></Poll>
      </div>
      <LocationModal />
    </div>
  );
};

export default Home;
