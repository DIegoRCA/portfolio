import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… ¯\_(ツ)_/¯
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React</b>
              </i>
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  
                  className="con_ico purple"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+610449007723" className="con-det">
                  +61 0449007723
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico purple"
                  
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:diegocartelle@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                 diegocartelle@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                 
                  className="con_ico purple"
                  sx={{ fontSize: 45 }}
                />
                <p className="con-det">Sydney, Australia</p>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DiegoRCA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/diego-cartelle-406361159/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
