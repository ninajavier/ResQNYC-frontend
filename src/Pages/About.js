import React from "react";
import JoinUs from "../Components/JoinUs";
import laura from "../assets/HeadShots/laura.png";
import nina from "../assets/HeadShots/nina.jpg";
import cephus from "../assets/HeadShots/cephus.jpg";
import keri from "../assets/HeadShots/Keri.jpg";
import together from "../assets/together.png";
import hurricane from "../assets/hurricane.png";
import { Card, Container, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid>
      <Col noGutters={false}>
        <Row padding="custom-padding-left" data-id="about-header">
          <h1 className="pb-5 pt-5">About</h1>
        </Row>
        <Row data-id="vision-container">
          <Col md={6}>
            <h2 className="our-vision-header">Our Vision</h2>

            <row>
              <p>
                ResQNYC is driven by a heartfelt vision to protect and empower
                the people of New York City in the face of natural disasters,
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
                At the core of ResQNYC's philosophy lies a commitment to
                combining cutting-edge technology with genuine empathy. CHATGPT,
                our revolutionary virtual assistant, continuously evolves and
                learns from every interaction, ensuring it remains responsive to
                the unique needs of each user. Beyond just offering practical
                assistance, we aspire to foster a culture of preparedness within
                the community. Through educational initiatives and community
                outreach programs, we aim to equip New Yorkers with the
                knowledge and resources they need to confidently tackle any
                disaster.
              </p>
              <p>
                Our innovative and heartfelt approach aims to transform how New
                Yorkers respond to natural disasters. By embracing technology as
                a tool for human-centric solutions and promoting proactive
                preparedness, ResQNYC seeks to create a resilient city where
                every individual can face adversity with confidence and safety.
                Together with the community, we envision a future where
                disasters no longer bring fear but serve as opportunities for
                strength and unity.
              </p>
            </row>
          </Col>
          <Col md={6}>
            <img
              src={together}
              alt="Our Vision"
              style={{ height: "auto", width: "100%" }}
            />
          </Col>
        </Row>
        <Row
          data-id="team-story-container"
          className="justify-content-end mt-5"
        >
          <Col md={4}>
            <img
              src={hurricane}
              alt="Team Story"
              style={{ height: "auto", width: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={8}>
            <h2 className="team-story-header">Team Story</h2>
            <p>
              At Disaster Relief, our team is made up of dedicated individuals
              who are passionate about making a difference in the lives of those
              affected by disasters. Each member brings unique skills and
              expertise to the table, allowing us to effectively coordinate and
              respond to emergencies in New York City. Together, we work
              tirelessly to ensure that our platform serves as a reliable
              resource for the community, empowering individuals and
              organizations to come together and provide support in times of
              crisis.
            </p>
          </Col>
        </Row>
        <Row data-id="meet-team-container">
          <h2 className="meet-team-header text-center">Meet The Team</h2>
          <Col md={3}>
            <Card>
              <Card.Body>
              <Card.Title className="text-center">Christina Cephus</Card.Title>
              <Card.Img src={cephus} style={{ height: "auto", width: "100%" }} />
              <Card.Text className="text-center"><h1>Project Manager</h1>
                  Christina Cephus is a highly motivated tech designer and
                  full-stack web developer with a passion for tackling modern
                  technical challenges with pragmatic creativity. Currently
                  focused on expanding her knowledge in AI, Data Structures, and
                  Algorithms, she seeks to further enhance her problem-solving
                  skills and stay at the forefront of technological
                  advancements. #LKHN
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
              <Card.Title className="text-center">Nina Javier</Card.Title>
              <Card.Img src={nina} style={{ height: "auto", width: "100%" }} />
              <Card.Text className="text-center"><h1>Technical Lead</h1>
                  Nina is a software developer who is currently learning and
                  evolving her skills at Pursuit. With a strong interest in
                  nature, she enjoys exploring all aspects of it, from bugs and
                  birds to trees. She is enthusiastic about cute animal games
                  and animals in general, and she hopes to combine her graphic
                  design expertise with software development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
              <Card.Title className="text-center">Laura Williams</Card.Title>
              <Card.Img src={laura} style={{ height: "auto", width: "100%" }} />
              <Card.Text className="text-center"><h1>Design Lead</h1>
                  Laura is an aspiring web developer currently studying at
                  Pursuit. She possesses a strong passion for fitness and
                  problem-solving, and she is intrigued by the transformative
                  potential of AI and its impact on the world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
            <Card.Body>
              <Card.Title className="text-center">Keri Emmanuel</Card.Title>
              <Card.Img src={keri} style={{ height: "auto", width: "100%" }} />
              <Card.Text className="text-center"><h1>Demo Lead</h1>
                  Keri is a technology enthusiast and aspiring programmer who is
                  currently pursuing studies to become a skilled software
                  developer. With over five years of experience in diverse
                  technical roles, he has honed his analytical, real-world
                  problem-solving, and customer service skills, and he is now
                  seeking new challenges and opportunities to advance his
                  professional development journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
