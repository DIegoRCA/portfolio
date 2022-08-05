import React, {useState} from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlineContacts,AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineUser } from "react-icons/ai";
import { FiGithub } from 'react-icons/fi';
import '../../styles/components/layout/Header.css';

function NavBar(){
const [expand, updateExpanded] = useState(false);
const [navColour, updateNavBar] = useState(false);

function scrollHandler() {
    if(window.scrollY >= 20){
        updateNavBar(true);
    }else{
        updateNavBar(false);
    }
}

window.addEventListener ('scroll', scrollHandler);

return(
        <Navbar 
            expanded={expand}
            fixed='top' 
            expand='md' 
            className={navColour ? "sticky" : "navbar"}>

            <Container>
                <Navbar.Brand href="/">
                    <h4 className="brand d=flex">Diego Cartelle</h4>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={()=>{
                        updateExpanded(expand ? false : "expanded");
                        }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto " defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={()=> updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={()=> updateExpanded(false)}>
                                <AiOutlineUser style={{marginBottom: "2px"}}/>About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={()=> updateExpanded(false)}>
                                <AiOutlineFundProjectionScreen style={{marginBottom: "2px"}}/>Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={()=> updateExpanded(false)}>
                                <CgFileDocument style={{marginBottom: "2px"}}/>Resume
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact" onClick={()=> updateExpanded(false)}>
                                <AiOutlineContacts style={{marginBottom: "2px"}}/>Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fork-btn">
                            <Button href="https://github.com/DIegoRCA" target="_blank" className="fork-btn-inner">
                            <FiGithub style={{fontSize: "1.2em"}}/>{" "}
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default NavBar;