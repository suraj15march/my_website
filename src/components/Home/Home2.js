import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

import myimg from "../../Assets/suraj.jpeg";
import Aboutcard from "../../components/About/AboutCard";
import { MdOutlineLabelImportant } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

        <Col
        className="home-about-description"
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suraj Kumar </span>
            from <span className="purple"> Banglore, India.</span><br/>
            I was 15 when I wrote my first line of code and since then it has been a roller-coster ride 
              getting stuck and then learning new things ,it's been fun! and I think I have at least learnt something 🤷‍♂️


            <br />I have completed my Bachelor of Engineering(B.E) in Information Science & Engineering from Nitte Meenakshi Institute of Technology, Banglore.
   
            <br />
            <br />
            No I'm not a nerd! apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdOutlineLabelImportant /> Playing Cricket and Table Tennis (I am also a gym buff!)
            </li>
            <li className="about-activity">
              < MdOutlineLabelImportant  /> Reading about financial markets 
            </li>
            <li className="about-activity">
              < MdOutlineLabelImportant  /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Thy right is to work only, but never to its fruits; let not the fruit-of-action be thy motive, nor let thy attachment be to inaction."{" "}
          </p>
          <footer className="blockquote-footer">Bhagavad Gita, Chapter 2, Verse: 47</footer>
        </blockquote>
          </Col>
       




          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/suraj15march"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suraj15march/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/suraj15_kumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/suraj15kumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
            </ul>
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
