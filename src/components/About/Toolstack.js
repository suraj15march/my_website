import React from "react";
import { Col, Row } from "react-bootstrap";
import {FiFigma} from "react-icons/fi"
import {
  SiAndroidstudio,
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiHeroku,

  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> <div><h2>Android Studio</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><div><h2>VisualStudio Code</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/><div><h2>Jupyter</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma /><div><h2>Figma</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><div><h2>Postman</h2></div>
      </Col>
    </Row>
  );
}

export default Toolstack;
