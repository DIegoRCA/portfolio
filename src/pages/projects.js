import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/layout/Projects/ProjectCards";
import tictac from "../../src/assets/Projects/TIC-TAC-TOE.png";
import WebPage from "../../src/assets/Projects/AlchemyWebPage.png";
import todo from "../../src/assets/Projects/todo_.png";
import Ecommerce from "../../src/assets/Projects/Ecommerce.png";
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
							imgPath={Ecommerce}
							isBlog={false}
							title="Sample of E-COMMERCE"
							description="Fully responsive e-commerce with a dinamic backend and payment method."
							techstack="HTML | CSS | JS | React | Next | Stripe | Sanity"
							link="https://ecommerce-diegorca.vercel.app/"
							git="https://github.com/DIegoRCA/ecommerce"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={WebPage}
							isBlog={false}
							title="Responsive Web"
							description="Responsive webpage using react & express."
							techstack="HTML | CSS | JS | REACT | EXPRESS"
							link="https://alchemyfrontend.herokuapp.com/"
							git="https://github.com/DIegoRCA/Bootstrap-Web"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							isBlog={false}
							title="TIC TAC TOE"
							description="A simple game where two players can play TIC TAC TOE & get the winner or draw."
							techstack="HTML | CSS | JS | REACT"
							link="https://tictactoexxx.herokuapp.com/"
							git="https://github.com/DIegoRCA/Tic-Tac_Toe-game"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Todo App"
							description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
							techstack="HTML | CSS | JS | React"
							link="https://to-do-list-sand-chi.vercel.app/"
							git="https://github.com/DIegoRCA/ToDoList"
						/>
					</Col>


				</Row>
			</Container>
		</Container>
	);
}

export default Projects;




