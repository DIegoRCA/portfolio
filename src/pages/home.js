import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home2 from "../components/layout/Home2"
import { Type } from "../components/layout/Type";
import Tilt from "react-parallax-tilt";
import Diego from "../assets/diego.gif";
import "../styles/components/pages/home.css";
function Home() {
  return (
    <>
        <Container fluid className="home-section" id="home">

          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading text-white">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> &nbsp;Diego Cartelle</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 0}}>
                <Tilt>
                <img src={Diego} alt="home pic" className="img-fluid"/>
                </Tilt>
              </Col>
            </Row>            
          </Container>
          <Container className="conHome2">
            <Row className="rowHome2 d-flex w-100">
            <Home2 className="home2"/>
            </Row>
            </Container>

        </Container>
        
    </>
  );
};

export default Home;