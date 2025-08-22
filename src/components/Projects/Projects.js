import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Full-Stack Fitness Routine Management Application"
              description="A full-stack fitness application enabling users to create, view, and manage workout routines."
              ghLink="https://github.com/XIUXIU25/workout_APP"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Scalable Video Transcoding & Streaming Pipeline"
              description="YouTube functionality—video uploading, processing, and viewing—rather than building a full production system."
              ghLink="https://github.com/XIUXIU25/youtube-clone"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cloud-Native Image Transformation Platform "
              description="A simple FastAPI backend that allows user authentication and image uploads."
              ghLink="https://github.com/XIUXIU25/image_processing"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Photo Album Project"
              description="Java-based application that allows users to manage a collection of shapes (rectangles and ovals), manipulate their properties (position, size, and color), and take snapshots to preserve their states at any given time"
              ghLink="https://github.com/XIUXIU25/photo-album"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

                              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense Tracker"
              description="This application allows users to add, delete, update, and view expenses, along with summary reports."
              ghLink="https://github.com/XIUXIU25/expense-tracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

                                        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GitHub User Activity"
              description="This tool allows you to see the latest activities (like pushes, issues, stars, etc.) of any GitHub user directly in your terminal."
              ghLink="https://github.com/XIUXIU25/github_activity"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
