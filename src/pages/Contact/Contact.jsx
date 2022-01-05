import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-style.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3" style={{color: "#99774f"}}>Say Hi!</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:govindnair75@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="talk-button" title="govindnair75@gmail.com" size="lg">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/govind-nair-1704651b6/" target="_blank" rel="noopener noreferrer">
                <Button className="linkedin-button" title="Visit my LinkenIn" size="lg">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/govindn75" target="_blank" rel="noopener noreferrer">
                <Button className="git-button" title="My other projects" style={{color: "white"}} size="lg">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
