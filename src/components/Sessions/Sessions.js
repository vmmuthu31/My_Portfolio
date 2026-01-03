import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsTwitterX } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const sessions = [
  {
    title: "Case Study on Web3 Wallets & Account Abstraction",
    venue: "TPG Chennai Inauguration",
    link: "https://x.com/chellaInTech/status/1626924748289765376",
  },
  {
    title: "Two-Day Bootcamp: Introduction to Web3 & Solidity",
    venue: "Adichunchanagiri Institute of Technology",
    link: "https://x.com/PhoenixGuildHQ/status/1673384595264270337",
  },
  {
    title: "Roadmap to Building Distributed Applications (dApps)",
    venue: "Knowledge Institute of Technology",
    link: "https://x.com/Gryffindor_W3/status/1695098920375128481",
  },
  {
    title: "Web2 to Web3 Transformation (1 Week Program)",
    venue: "Women in Web3 Academy, Bangladesh",
    link: "https://x.com/TPG_Chennai/status/1700017546790113609",
  },
  {
    title: "Integrating React, Web3.js & Solidity for dApps",
    venue: "REVA University",
    link: "https://x.com/TPG_Karnataka/status/1719764577066598498",
  },
  {
    title: "Deep Dive into Core Blockchain & Purple DAO",
    venue: "ETH Mumbai Hackathon",
    link: "https://x.com/TPG_Chennai/status/1771376092605018191",
  },
  {
    title: "Building Smart Contracts with COTI SDKs",
    venue: "Ramaiah Institute of Technology",
    link: "https://x.com/BizthonOfficial/status/1805920756821303303",
  },
  {
    title: "Building Smart Contracts on COTI",
    venue: "Bangalore Institute of Technology",
    link: "https://x.com/BizthonOfficial/status/1805920756821303303",
  },
  {
    title: "AI for Blockchain (2-Day Session)",
    venue: "NIT Rourkela",
    link: null,
  },
  {
    title: "Guest Faculty: Finance in Blockchain",
    venue: "DG Vaishnav College (B.Com Students)",
    link: null,
  },
];

function Sessions() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Sessions & <strong className="purple">Talks</strong>
        </h1>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: "40px" }}
        >
          Trained <span className="purple">500+ students</span> across India and
          Bangladesh
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {sessions.map((session, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title style={{ color: "#c770f0", fontWeight: "600" }}>
                    {session.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#fff", marginTop: "10px" }}>
                    <MdLocationOn style={{ marginRight: "5px" }} />
                    {session.venue}
                  </Card.Text>
                  {session.link && (
                    <Button
                      variant="primary"
                      href={session.link}
                      target="_blank"
                      style={{ marginTop: "10px" }}
                    >
                      <BsTwitterX style={{ marginRight: "5px" }} />
                      View Proof
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Sessions;
