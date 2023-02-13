import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leonardo247 from "../../Assets/Projects/leonardo247.png";
// import emotion from "../../Assets/Projects/emotion.png";
import ziplingo from "../../Assets/Projects/ziplingo.png";
import cryptotrak from "../../Assets/Projects/CryptoTrak.png";
// import suicide from "../../Assets/Projects/suicide.png";
import dashboard from "../../Assets/Projects/dashboard.png";

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
              imgPath={cryptotrak}
              isBlog={false}
              title="CrptoTrak"
              description="A cryptocurrency tracking website to stay informed with accurate and up-to-date information about performance of varous cryptocurrencies. Made with React JS, Material UI and chart.js"
              ghLink="https://github.com/cloudyunicorn/CryptoTrak"
              demoLink="https://crypto-trak.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard for Krenai"
              description="A complete dashboard design using Angular, Angular Material and Angular flex for Krenai solutions pvt. ltd. showing all the neccessary statistics like sales, inventory, customers, performance etc."
              ghLink="https://github.com/cloudyunicorn/krenai-dashboard"
              demoLink="https://krenai-dashboard.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ziplingo}
              isBlog={false}
              title="UI for Ziplingo"
              description="Ziplingo is a messaging platform solution for businesses to engage with distributors and customers accross the world. Designed main UI pages for the company including Dashboard, Contacts, Campaigns etc."
              demoLink="https://ziplingo.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leonardo247}
              isBlog={false}
              title="Leonardo247"
              description="A property operations and maintenance platform to streamline and simplify tasks for property owners and helpers. Worked on react forms, UI changes, page layouts using React,js and third party react libraries like react-select, react-draggable."
              demoLink="https://leonardo247.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
