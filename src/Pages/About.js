import React from "react";
import JoinUs from "../Components/JoinUs";

const About = () => {
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="text-center mb-5">About Us</h1>
          <div className="our-vision">
            <h2>Our Vision</h2>
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
          </div>
          <div className="team-story">
            <h2>Team Story</h2>
            <p>
              Our team story revolves around a shared passion for making New
              York City a safer place during natural disasters. Recognizing the
              importance of quick access to crucial information, we integrated
              CHATGPT, a live virtual assistant, into our platform. Our mission
              is to provide New Yorkers with real-time guidance and essential
              support during emergencies. With a collective effort, we strive to
              empower the community with the tools they need to navigate crises
              confidently. Our commitment remains steadfast, as we stand by New
              Yorkers, offering them the assistance and reassurance they deserve
              in times of uncertainty.
            </p>
          </div>
        </div>
        <JoinUs />
      </div>
      <JoinUs />
    </div>
  );
};

export default About;
