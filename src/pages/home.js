import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "../components/layout/Type";
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
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={"17.gif"} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  );
};

export default Home;