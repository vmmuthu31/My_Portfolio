import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vairamuthu</span> from{" "}
            <span className="purple">Chennai, India.</span>
            <br />I am a Full Stack Developer with a passion for creating
            innovative and scalable applications.
            <br />I have completed my Bachelor's degree in Computer Science
            Engineering from Jaya Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Blockchain Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Discovering New Places
            </li>
          </ul>

          <p className="purple">"Live the life you love!" </p>
          <footer className="blockquote-footer">Vairamuthu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
