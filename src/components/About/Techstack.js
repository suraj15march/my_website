import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJava ,
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiAndroid,
  DiGit,
} from "react-icons/di";
import {
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiFirebase,
  
  SiTensorflow
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/><div><h2>Java</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><div><h2>JavaScript</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/><div><h2>Python</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><div><h2>React</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid /><div><h2>Android</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /><div><h2>Tensorflow</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><div><h2>Git</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><div><h2>FireBase</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb /><div><h2>MongoDb</h2></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /><div><h2>SQL</h2></div>
      </Col>
    </Row>
  );
}

export default Techstack;
