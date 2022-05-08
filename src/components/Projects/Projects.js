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
							imgPath={LMS}
							isBlog={false}
							title="LMS"
							description="LMS Elearn platform, Mainly focused on the Authentication using passport.js and more tools"
							link="https://github.com/vmmuthu31/LMS"
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
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
