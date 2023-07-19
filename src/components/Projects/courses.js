
import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications} from "./experience.js";

const Courses=()=>{
    
    return(


        <div className="main" id="certs">
             <div className="certs-header-div">
               <Fade bottom duration={2000} distance="20px">

               
                <h1 className="experience-heading" >
                   Certifications
                </h1>
              
               </Fade>
             </div>



             <div className="certs-body-div">

                
              
             {certifications.certifications.map((cert) => {

                return(



      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={cert.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: cert.color_code }}
              >
                <img
                width="300" height="300"
                  className="logo_img"
                 // src="#"
                   src={require(`../../Assets/Images/${cert.logo_path}`)}
                  alt={cert.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: cert.body }}
                >
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: "white" }}
            >
              {cert.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: "lavender" }}
            >
               
              {cert.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
 );

               })}
             </div>
           </div>
    )
}

export default Courses;




