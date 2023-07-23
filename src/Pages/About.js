import React from "react";
import JoinUs from "../Components/JoinUs";
import { Card, Container, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid>
      <Col noGutters={false}>
        <Row padding="custom-padding-left" data-id="about-header">
          <h1>About</h1>
        </Row>
        <Row data-id="vision-container">
          <h2>Our Vision</h2>

          <row>
            <p>
              ResQNYC is driven by a heartfelt vision to protect and empower the
              people of New York City in the face of natural disasters,
              particularly during hurricanes. We recognize that many residents
              may not be adequately prepared for such events until they are
              confronted with them. Our mission is to bridge this gap by
              providing innovative solutions that ensure every New Yorker has
              swift access to safety. With the help of our AI-powered virtual
              assistant, CHATGPT, we offer real-time guidance, essential
              information, and compassionate support to navigate the
              complexities of emergencies.
            </p>
            <p>
              At the core of ResQNYC's philosophy lies a commitment to combining
              cutting-edge technology with genuine empathy. CHATGPT, our
              revolutionary virtual assistant, continuously evolves and learns
              from every interaction, ensuring it remains responsive to the
              unique needs of each user. Beyond just offering practical
              assistance, we aspire to foster a culture of preparedness within
              the community. Through educational initiatives and community
              outreach programs, we aim to equip New Yorkers with the knowledge
              and resources they need to confidently tackle any disaster.
            </p>
            <p>
              Our innovative and heartfelt approach aims to transform how New
              Yorkers respond to natural disasters. By embracing technology as a
              tool for human-centric solutions and promoting proactive
              preparedness, ResQNYC seeks to create a resilient city where every
              individual can face adversity with confidence and safety. Together
              with the community, we envision a future where disasters no longer
              bring fear but serve as opportunities for strength and unity.
            </p>
          </row>
        </Row>
        <Row data-id="team-story-container" className="justify-content-end">
          <h2>Team Story</h2>
          <p>
            At Disaster Relief, our team is made up of dedicated individuals who
            are passionate about making a difference in the lives of those
            affected by disasters. Each member brings unique skills and
            expertise to the table, allowing us to effectively coordinate and
            respond to emergencies in New York City. Together, we work
            tirelessly to ensure that our platform serves as a reliable resource
            for the community, empowering individuals and organizations to come
            together and provide support in times of crisis.
          </p>
        </Row>
        <Row data-id="meet-team-container">
          <h2>Meet The Team</h2>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
