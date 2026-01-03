import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdWork, MdSchool } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";

const experiences = [
  {
    title: "Web3 Full Stack Developer",
    company: "Polkassembly",
    period: "Jul 2024 – Present",
    description:
      "Building governance infrastructure for Polkadot ecosystem. Developed Activity Feed, Subscription System, Delegation Dashboard, and Bounties.",
    tech: ["React.js", "NestJS", "PostgreSQL", "Kafka", "AWS"],
    type: "fulltime",
    icon: <MdWork />,
  },
  {
    title: "Full Stack Developer",
    company: "Synlian QF",
    period: "Dec 2023 – Jun 2024",
    description:
      "Core governance product development with deep Polkadot API, Substrate, and People's Identity API integration.",
    tech: ["React.js", "NestJS", "Mantine CSS", "Tailwind"],
    type: "fulltime",
    icon: <MdWork />,
  },
  {
    title: "SDE Intern & Data Analyst",
    company: "Limra",
    period: "Sep 2022 – May 2023",
    description:
      "Built business intelligence dashboards and full-stack applications.",
    tech: ["Power BI", "Tableau", "Next.js"],
    type: "intern",
    icon: <MdSchool />,
  },
  {
    title: "GSOC Contributor & Mentor",
    company: "Drupal",
    period: "May 2022 – Sep 2022",
    description:
      "Built Generic Decoupled Web Components. Mentored in GSOC 2023.",
    tech: ["Lit-Element", "VueJS", "StorybookJS"],
    type: "gsoc",
    icon: <SiGooglescholar />,
  },
];

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Work <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center" }}>
          {experiences.map((exp, index) => (
            <Col md={6} key={index} className="experience-card-col">
              <Card className="experience-card">
                <Card.Body>
                  <div className="experience-header">
                    <div className="experience-icon-new">{exp.icon}</div>
                    <div className="experience-info">
                      <h4 className="experience-role">{exp.title}</h4>
                      <p className="experience-company">@ {exp.company}</p>
                    </div>
                  </div>
                  <p className="experience-date">
                    <AiOutlineCalendar /> {exp.period}
                  </p>
                  <p className="experience-desc">{exp.description}</p>
                  <div className="experience-tech">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
