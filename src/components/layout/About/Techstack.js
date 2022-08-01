import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import {SiAdobe, SiMysql} from "react-icons/si"
function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p>HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p>CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
				<p>JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
				<p>Node JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p>React</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
			<p>Express</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
				<p>Mysql</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAdobe />
				<p>Adobe Suite</p>
			</Col>
			
		</Row>
	);
}

export default Techstack;
