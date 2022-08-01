import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "../styles/components/pages/contact.css";
function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Feel free to <span className="purple">connect </span>with me
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                   
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+917069896660" className="con-det">
                    +61 0449007723
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:harshmehta813@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    diegocartelle@gmail.com
                  </a>
                </div>
                <div>
                  <PlaceIcon
                    
                    className="con_ico"
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
    </section>
  );
}

export default Contact;





