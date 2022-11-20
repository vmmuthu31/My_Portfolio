import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certicards from "./Certicards";
import Particle from "../Particle";
import intern from "../../Assets/intern.jpg";
import projectintern from "../../Assets/Certificates/projectintern.png";
import internship from "../../Assets/../Assets/Certificates/internship.pdf";
import reactimg from "../../Assets/../Assets/React.jpg";
import javaimg from "../../Assets/../Assets/Certificates/java_certification.png";
import javacer from "../../Assets/../Assets/Certificates/java_certification.png";
import mysqlcer from "../../Assets/../Assets/Certificates/mysql.png";
import mysqlimg from "../../Assets/../Assets/Certificates/mysql.png";
import cimg from "../../Assets/../Assets/Certificates/C.png";
import Ccer from "../../Assets/../Assets/Certificates/C.png";
import reactCer from "../../Assets/../Assets/Certificates/React.pdf";
import Coursera from "../../Assets/../Assets/Certificates/Course_era_python_certificate.pdf";
import python from "../../Assets/../Assets/python_for_everybody.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've achieved recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={projectintern}
              isBlog={false}
              title="Google Summer of Code"
              description="Successfully completed 13 Weeks Software Developer Internship in the Drupal Organization."
              link={internship}
            />
          </Col>
          <Col md={4} className="project-card">
            <Certicards
              imgPath={intern}
              isBlog={false}
              title="Stige Internship Certificate"
              description="Successfully completed 13 Weeks Software Developer Internship in the Trainity Company."
              link={internship}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={python}
              isBlog={false}
              title="Python for Everybody"
              description="Python for Everybody is a Specialisation course Accomplished in the Coursera. "
              link={Coursera}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={reactimg}
              isBlog={false}
              title="React 7 days workshop"
              description="Successfully completed 7 Days workshop over the Javascript library framework react."
              link={reactCer}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={cimg}
              isBlog={false}
              title="C Programming"
              description="Successfully completed the C programming course over the Stucor learning platform"
              link={Ccer}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={javaimg}
              isBlog={false}
              title="Java Programming"
              description="Successfully completed the Java programming course over the Stucor learning platform"
              link={javacer}
            />
          </Col>

          <Col md={4} className="project-card">
            <Certicards
              imgPath={mysqlimg}
              isBlog={false}
              title="MySql"
              description="Successfully completed the MySql course over the Stucor learning platform"
              link={mysqlcer}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
