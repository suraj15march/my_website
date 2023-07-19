import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';



// import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
// import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';

import './Experience.css';

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:'#1E2732',
            // "&:hover": {
            //     backgroundColor:theme.primary50,
            // },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: '#1D9BF0'}}>
                    {/* <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" /> */}
                </div>
                <div className="experience-details">
                    <h6 style={{color: '#1D9BF0'}}>{startYear}</h6>
                    <h4 style={{color: '#EFF3F4'}}>{jobtitle}</h4>
                    <h6 style={{color: '#EFF3F4'}}>{company}</h6>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
