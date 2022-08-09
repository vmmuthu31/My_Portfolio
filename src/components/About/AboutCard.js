import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vairamuthu </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I am pursuing B.E in Computer Science Engineering at Jaya
            Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="purple">"Live the life like you love!" </p>
          <footer className="blockquote-footer">Vairamuthu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
