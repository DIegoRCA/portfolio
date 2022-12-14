import React, {useState, useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
import "../styles/components/pages/resume.css";

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		
		setWidth(window.innerWidth);
	},[]);

	return (
		<div>
			<Container fluid className="resume-section">
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button 
						className="filebutton"
						href={
							"https://drive.google.com/uc?export=download&id=1fxnRiXpLopzRhq3LM4TB0grMnTcd2XB3"
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1-fQ5YAMpvM47YXmQNiF_L4KaQl1Kct0eLZKYIRMbXkA/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						className="filebutton"
						href={
							"https://drive.google.com/uc?export=download&id=1fxnRiXpLopzRhq3LM4TB0grMnTcd2XB3"
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
