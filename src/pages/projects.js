import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/layout/Projects/ProjectCards";
import tictac from "../../src/assets/Projects/TIC-TAC-TOE.png";
import Smatbot from "../../src/assets/Projects/Smatbot.png";
import todo from "../../src/assets/Projects/todo_.png";
import Booking from "../../src/assets/Projects/Booking.png";
import '../styles/components/pages/projects.css';
function Projects() {
	return (
		<Container fluid className="project-section">
			
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
							imgPath={tictac}
							isBlog={false}
							title="TIC TAC TOE"
							description="A simple game where two players can play TIC TAC TOE & get the winner or draw."
							techstack="HTML | CSS | JS"
							link="#/"
							git="https://github.com/DIegoRCA/Tic-Tac_Toe-game"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Smatbot}
							isBlog={false}
							title="Clone of Smatbot.com"
							description="Smatbot provides a facility to create a chatbot for all business needs."
							techstack="HTML | CSS | JS"
							link="#"
							git="#"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Todo App"
							description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
							techstack="HTML | CSS | JS | React"
							link="#"
							git="#"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Booking}
							isBlog={false}
							title="Clone of Booking.com"
							description="Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings."
							techstack="HTML | CSS | JS | React | Redux | Material UI"
							link="#"
							git="#"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;




