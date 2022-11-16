import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.jpeg";
import LMS from "../../Assets/Projects/LMS.jpeg";

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
              imgPath="https://raw.githubusercontent.com/vmmuthu31/vmmuthu31/main/gdc.png"
              isBlog={false}
              title="Generic Decoupled Web Component"
              description="It should be easy to use these web components in decoupled Drupal projects with API data provided by Drupal Core.
              It should also be possible to use these same components within Drupal's traditional Twig based templating engine.!"
              link="https://raw.githubusercontent.com/vmmuthu31"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/200388943-3d18bd81-2ecb-441e-92f7-1cecf81e7ae1.jpg"
              isBlog={false}
              title="Immovables"
              description="Immovables is a Decentralised real estate marketplace where you can purchase and sell lands using your Crypto Wallet and know about the Details of the ledger sheets. It creates an peer-to-peer smart contract between the buyer and seller.!"
              link="https://github.com/Block-Developers/Immovable-web3build"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/vmmuthu31/main/Screenshot%20from%202022-08-04%2016-15-59.png"
              isBlog={false}
              title="Language Communicator tool"
              description="It is Frontend language communicator tool developed for the AICTE internship!"
              link="https://github.com/vmmuthu31/Language-communicator-tool"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDoUkHHMGXAhMwYOrqgBamD1Zq4mJVuwtjX8kFZ0O81LxzQClR3K9Cj8jqw6hg5zhsrY&usqp=CAU"
              isBlog={false}
              title="Farm Tech"
              description="A tool to help the Tamilnadu farming community to optimize crop production!"
              link="https://github.com/E-ggle/FarmTech-142"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/180494873-43f4d449-20c4-461c-8df4-7dbb133e9960.png"
              isBlog={false}
              title="QuickChillAC-Services Website"
              description="It is real timee project done over to the client in chennai!"
              link="https://jec-site.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/vmmuthu31/main/jedi.png"
              isBlog={false}
              title="JEDI-E-Cell"
              description="It is Entrepreneur site developed for our college site.!"
              link="https://github.com/vmmuthu31/JEDI-E-Cell"
            />
          </Col>
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
              imgPath={LMS}
              isBlog={false}
              title="LMS"
              description="LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools"
              link="https://github.com/vmmuthu31/LMS"
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
              imgPath="https://raw.githubusercontent.com/vmmuthu31/My_Portfolio/master/src/Assets/Projects/notes.png"
              isBlog={false}
              title="NotesApp-using-Node"
              description="It is a notes application connected to the database which get the notes from the user and display their needs."
              link="https://github.com/vmmuthu31/NotesApp-using-Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/calc.png"
              isBlog={false}
              title="Calculator in Reactjs"
              description="A simple Calculator Application built in React js."
              link="https://u2r4k.csb.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/88650559/177109813-8d71d61e-6449-45c7-a8a2-081207a96161.png"
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-Tac-Toe Is an X or O gaming app. It was built with Javascript Event Listeners "
              link="https://vm-tictactoe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/vmmuthu31/Personal-Blog/master/src/pages/drumkit.png"
              isBlog={false}
              title="Drum Kit"
              description="Drumkit completely made by using JS and HTML."
              link="https://vmmuthu31.github.io/Drumkit/"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
