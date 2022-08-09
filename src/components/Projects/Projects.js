import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notes from "../../Assets/Projects/notes.png";
import netflix from "../../Assets/Projects/netflix.jpeg";
import google from "../../Assets/Projects/google.png";
import LMS from "../../Assets/Projects/LMS.jpeg";
import TASK from "../../Assets/Projects/TASK.jpeg";
import weather from "../../Assets/Projects/weather.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/180494873-43f4d449-20c4-461c-8df4-7dbb133e9960.png"
              isBlog={false}
              title="Departmental Website"
              description="It is our college departmental website built in react components.!"
              link="https://jec-site.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/Horti.png"
              isBlog={false}
              title="HortiPedia"
              description="Hortipedia is a question and answer website for professional and developing farmers."
              link="https://github.com/E-ggle/HortiPedia"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/179293522-f79adfc6-2c7d-4a4c-813b-756c7bec0af2.png"
              isBlog={false}
              title="Twitter in Web3"
              description="Nextjs is used for frontend, solidity is for implementation of smart contracts, sanity.i.o is used to manage the text and images."
              link="https://github.com/vmmuthu31/Twitter-using-web3-and-blockchain"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/Images/readme-img.png"
              isBlog={false}
              title="Dynamic Portfolio"
              description="It is Portfolio website where the developers can modify it according to the user needs."
              link="https://vm-portfolio3.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/e-ggle.png"
              isBlog={false}
              title="E-ggle Educational Website"
              description="This website is where you can get popular courses which can improve your skills at the next level."
              link="https://e-ggle.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/Project-Management-System/main/Screenshot%20(44).png"
              isBlog={false}
              title="Project Management System"
              description="It was built in MERN stack by using the GraphQL for the API call. It was an Dynamic Application where the user can Create/Read/Update/Delete the content."
              link="https://github.com/vmmuthu31/Project-Management-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/TASK.jpeg"
              isBlog={false}
              title="Task-CrudAPP"
              description="Crud Application used to manage the Task of the User."
              link="https://github.com/vmmuthu31/Task-CrudAPP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/weather.jpeg"
              isBlog={false}
              title="Weather_API_App-using-Express"
              description="It an Weather Application build using the express get the API from the openweather.org and gives the post request to user."
              link="https://vm-weather.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/google.png"
              isBlog={false}
              title="Google-Clone-using-React"
              description="Google Clone made by using the Goolge API with the famous JS Library framework React."
              link="https://github.com/vmmuthu31/Google-Clone-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TASK}
              isBlog={false}
              title="Task-CrudAPP"
              description="Crud Application used to manage the Task of the User
              "
              link="https://github.com/vmmuthu31/Task-CrudAPP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather_API_App-using-Express"
              description="It an Weather Application build using the express get the API from the openweather.org and gives the post request to user"
              link="https://github.com/vmmuthu31/Weather_API_App-using-Express"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google-Clone-using-React"
              description="Google Clone made by using the Goolge API with the famous JS Library framework React"
              link="https://github.com/vmmuthu31/Google-Clone-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="NotesApp-using-Node"
              description="It is a notes application connected to the database which get the notes from the user and display their needs"
              link="https://github.com/vmmuthu31/NotesApp-using-Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NetFlix-Clone"
              description="This project consist of Home page, Sign up page, Browser page in HTML, CSS and JavaScript"
              link="https://github.com/vmmuthu31/netflix-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="LMS"
              description="LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools"
              link="https://github.com/vmmuthu31/LMS"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
