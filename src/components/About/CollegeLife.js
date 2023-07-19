import React, { useContext } from 'react';
import education from '../About/CollegeLife/education.json';


import '../About/CollegeLife/Education.css';
import EducationCard from '../About/CollegeLife/EducationCard.js';

import { Container } from '@material-ui/core';
import { educationData } from '../About/CollegeLife/educationData.js';
import AnimationLottie from '../About/CollegeLife/Animation.js';

function Education() {

    // const { theme } = useContext(ThemeContext);
    return (
        // style={{ backgroundColor: '#15202B' }}
        <div >
            <Container className="education" id="resume">
                <div className="education-body">
                    <div className="education-image">
                        <AnimationLottie animationPath={education} />
                    </div>
                    <div className="education-description">
                        
                        {educationData.map(edu => (
                            <EducationCard
                                key={edu.id}
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Education
