import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdWork } from "react-icons/md";

const experiences = [
  {
    title: "Web3 Full Stack Developer",
    company: "Polkassembly",
    period: "July 2024 – January 2026",
    description:
      "Building governance infrastructure for Polkadot ecosystem. Developed Activity Feed, Subscription System, Delegation Dashboard, and Bounties features. Working with React.js, NestJS, PostgreSQL, Kafka, and AWS.",
    type: "fulltime",
  },
  {
    title: "Full Stack Developer",
    company: "Synlian QF",
    period: "December 2023 – June 2024",
    description:
      "Worked on core governance product, building and maintaining key features with deep integration of Polkadot API, Substrate, and People's Identity API for on-chain governance workflows.",
    type: "fulltime",
  },
  {
    title: "SDE Intern & Data Analyst",
    company: "Limra",
    period: "September 2022 – May 2023",
    description:
      "Worked in Data Analyst and Development teams, building applications with Power BI, Tableau, and Next.js for business intelligence solutions.",
    type: "intern",
  },
  {
    title: "Google Summer of Code",
    company: "Drupal",
    period: "May 2022 – September 2022",
    description:
      "Built Generic Decoupled Web Components using Lit-Element, VueJS, Open Props CSS Variables, and StorybookJS with Drupal's API data. Mentored in GSOC 2023.",
    type: "gsoc",
  },
];

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Work <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-icon">
                    <MdWork />
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">
                      {exp.title}{" "}
                      <span className="purple">@ {exp.company}</span>
                    </h3>
                    <p className="experience-period">
                      <AiOutlineCalendar /> {exp.period}
                    </p>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
