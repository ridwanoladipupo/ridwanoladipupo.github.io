import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clubly from "../../Assets/Projects/clubly.png";
import stoched from "../../Assets/Projects/stoched.png";
import peerscore from "../../Assets/Projects/peerscore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubly}
              isBlog={false}
              title="Clubly"
              description="Clubly is a secured web application by Algorism Ltd developed with several in-built tools to help you manage your association from a single point of access, extending the standard membership management with additional features."
              link="https://clubly.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peerscore}
              isBlog={false}
              title="Peerscore"
              description="PeerScore is a peer-to-peer lending and credit information platform that seeks to shape credit behavior within the informal sector."
              link="https://peerscore.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoched}
              isBlog={false}
              title="Stoched"
              description="Stoched will help business people, engineers, inventors, entrepreneurs gain a deep understanding of their vulnerability to risks and uncertainties - and overcome and succeed."
              link="https://github.com/ridwanoladipupo/stoched_client"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
