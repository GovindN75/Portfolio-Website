import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skills } from "./skills-info";
import "./skills-style.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4" style={{color: "#99774f"}}>Things I am sometimes good at</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <Card className="focus mt-2 mb-2" style={{backgroundColor: "#FEFBEA"}}>
              <Card.Body>
                <Card.Title className="text-center card-title" style={{color: "#99774f"}}>Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.languages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{color: "#99774f"}}>
                        <Image src={skill.img} alt={skill.img_alt} rounded className="image-style m-1"></Image> {skill.name}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="focus mt-2 mb-2" style={{backgroundColor: "#FEFBEA"}}>
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: "#99774f"}}>Web Development</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.webdev.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{color: "#99774f"}}>
                        <Image src={skill.img} alt={skill.img_alt} rounded className="image-style m-1"></Image> {skill.name}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="focus mt-2 mb-2" style={{backgroundColor: "#FEFBEA"}}>
              <Card.Body>
                <Card.Title className="text-center card-title" style={{color: "#99774f"}}>Tools and Technologies</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.misc.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a href={skill.link} target="_blank" rel="noopener noreferrer" style={{color: "#99774f"}}>
                        <Image src={skill.img} alt={skill.img_alt} rounded className="image-style m-1"></Image> {skill.name}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
