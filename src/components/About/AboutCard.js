import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vairamuthu M</span> from{" "}
            <span className="purple">Chennai, India.</span>
            <br />
            <br />
            I'm a <span className="purple">Web3 Full Stack Developer</span>{" "}
            currently working at <span className="purple">Polkassembly</span>,
            building governance infrastructure for the Polkadot ecosystem.
            <br />
            <br />I graduated in 2024 from Jaya Engineering College (CGPA: 8.42)
            and am pursuing my Master's degree remotely. I was a{" "}
            <span className="purple">Google Summer of Code 2022</span>{" "}
            contributor and mentored in 2023.
            <br />
            <br />
            Apart from coding, some things I'm passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Won{" "}
              <span className="purple">24+ Hackathons</span> (ETHIndia,
              Starknet, APTOS, Aleo)
            </li>
            <li className="about-activity">
              <ImPointRight /> Trained{" "}
              <span className="purple">500+ students</span> in Web3 & Blockchain
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span className="purple">1500+ GitHub contributions</span> in open
              source
            </li>
            <li className="about-activity">
              <ImPointRight /> Guest speaker at NIT Rourkela, TOKEN 2049
              Singapore
            </li>
          </ul>

          <p className="purple">
            "From a third-tier college to building the Web3 future!"{" "}
          </p>
          <footer className="blockquote-footer">Vairamuthu M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
