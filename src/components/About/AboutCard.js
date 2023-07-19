import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <h1 style={{ fontSize: "2.1em", marginBottom: "-100px"  }} >
      
              Let Me Introduce<strong className="purple"> Myself</strong>
            </h1>

      <Col md={10} className="home-about-description">
      <Row style={{ justifyContent: "center", padding: "5px" }}>
            <p className="home-about-body">
             Technology has always excited me , and I am fortunate to be a part of this change and witness it.As a developer my purpose has always been to build products which are simple yet impactful.
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Java, Python and JavaScript. </b>
              </i>
              <br />
              <br />
              My area of interest lies in building &nbsp;
              <i>
                <b className="purple">Mobile Technologies </b> leveraging
                the power of {" "}
                <b className="purple">
                 Artificial Intelligence and  Deep Learning.
                </b>
              </i>
              <br />
              <br />
              I have also started to learn and explore the web and blockchain. Trying my hands on  <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js. </b>
              </i>
              along with 
              <i>
                <b className="purple"> Etherium </b>
              </i>
              and 
              <i>
                <b className="purple"> Solidity </b>
              </i>
            </p>
            </Row>
          </Col> 
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
