import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about-style.css";
import Profile from "../../assets/img/Profile/me.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3" style={{color: "#f7fcfe"}}>A bit more about me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} style={{borderRadius: "50%", borderStyle: "hidden"}}thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                 Nice to meet you! I am <strong>&nbsp;Govind Nair</strong>
                <br />I'm currently at UWaterloo majoring in the ever expanding subject, Computer Science.<br />
                <br />I enjoy all things computer related but if you had to ask me what I find most interesting, it would have to be Machine Learning, Game Development and App/Web Development. 
                
                <br />
                
                <br />Other than coding, I enjoy reading, gaming and working out. Due to COVID, gaming is one of the ways I get to keep in touch with my friends and relax after a long day. 
                If you would like some Netflix reccomendations, some of my favourites include: Brooklynn Nine Nine, The Office and Naruto (for all you anime fans out there). 

                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-danger">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#about" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/govindn75" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/govind-nair-1704651b6/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-primary">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
