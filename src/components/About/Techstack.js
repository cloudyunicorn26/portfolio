import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: "18px" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "18px" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "18px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "18px" }}>React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{ fontSize: "18px" }}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "18px" }}>Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "18px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p style={{ fontSize: "18px" }}>Next JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "18px" }}>Firebase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
