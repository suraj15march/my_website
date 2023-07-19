import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Courses from "./courses.js"
import WorkExpMain from "./WorkExpMain.js"
import Publication from "./Publication.js"
import Particle from "../Particle";
import algo from "../../Assets/Projects/sk_algo.png";
import weather from "../../Assets/Projects/sk_weather.png";
import portfolio from "../../Assets/Projects/ayush.jpeg";
import um from "../../Assets/Projects/SK_umeed.png";

import music from "../../Assets/Projects/sk_music.png";
import ros from "../../Assets/Projects/SK_ROS.jpg";

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
              imgPath={portfolio}
              isBlog={false}
              title="Fluent-bit Logs Output"
              description="App to locate nearby AYUSH ( clinics offering services like Ayurveda, Unani, Siddha, Homeopathy) hopsitals.User can filter out distance or chose to locate hospitals based on the symptoms he/she feels.All the information of the hospital is displayed once user clicks on the marker. "
              link="https://github.com/SchrOdinger11/JeevAyush"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Virtual Operating System"
              description="Created a cafeteria footfall predictor application with inventory management and revenue prediction features using ReactJs,NextJs,MongoDB and Machine Learning techniques."
              link="https://github.com/SchrOdinger11/Rush-Estimator-for-Corporate-Cafeteria"
            />       
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Tour Management System"
              description="Developed a deep learning model for music recommendation which is based on emotion detection and face recognition.The final music is added into personalised spotify user playlist."
              link="https://github.com/SchrOdinger11/RecommendationMusic"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={um}
              isBlog={false}
              title="Grafana Loki sample with Docker and fluent-bit"
              description="A disaster management which has features such as emergency calling, messaging and locating nearby emergency locations etc. Developed in Android Java"
              link="https://github.com/SchrOdinger11/Umeed_Disaster_Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Whatsapp Remainder Application"
              description="Built a path finding visualizer webApp in ReactJs.This project helps us visualize how Djikshtra , Breadth First Search and Depth First Search algorithms work to find the shortest path between source and destination."
              link="https://github.com/SchrOdinger11/AlgoVisualizer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ros}
              isBlog={false}
              title="Golden Ratio"
              description="Android Application based on Optical Character Recognition built in android studio using Java , Xml, Figma , FireBase and ML SDK Kit APIs. Have features such as text detection, language identification and translation, Text to speech conversion and more!"
              link="https://github.com/SchrOdinger11/Ros-Scanner-V2"
            />
          </Col>

         


        </Row>
       <WorkExpMain></WorkExpMain>
      <Publication/>
       <Courses/>
      </Container>
      
    </Container>
  );
}

export default Projects;
