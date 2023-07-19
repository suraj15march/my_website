import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';



import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {

    // const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:'#1E2732',
            // "&:hover": {
            //     backgroundColor:theme.primary50,
            // },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: '#1D9BF0'}}>
                    {/* <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" /> */}
                </div>
                <div className="education-details">
                    <h6 style={{color: '#1D9BF0'}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: '#EFF3F4'}}>{course}</h4>
                    <h6 style={{color: '#EFF3F4'}}>{institution}</h6>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
