import React from "react";
import { Container} from "react-bootstrap";

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
				</Container>
		</Container>
	);
}

export default Projects;




