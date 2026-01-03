import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/le.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Web3 Full Stack Developer</b>{" "}
              currently building governance infrastructure at{" "}
              <b className="purple">Polkassembly</b> for the Polkadot ecosystem.
              <br />
              <br />
              Started from a third-tier college, I've won{" "}
              <b className="purple">24+ hackathons</b>, contributed to{" "}
              <b className="purple">Google Summer of Code</b>, and trained over{" "}
              <b className="purple">500+ students</b> in blockchain development.
              <br />
              <br />
              My expertise spans{" "}
              <i>
                <b className="purple">
                  Solidity, Cairo, React, Next.js, NestJS, and PostgreSQL
                </b>
              </i>
              . I'm passionate about{" "}
              <i>
                <b className="purple">
                  on-chain governance, DeFi automation, and Web3 identity
                </b>
              </i>
              .
              <br />
              <br />
              When I'm not coding, I'm either mentoring at hackathons or
              speaking at tech conferences across India and internationally.
            </p>
          </Col>
          <Col md={4} style={{ margin: "0px" }} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ height: "60vh", width: "30vh" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vmmuthu31"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Vairamu56935830"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vmmuthu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/barfi_31_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
