import React from 'react';
import '../../styles/Resume.css'
import resumeIcon from '../../assets/images/icons/resume-light-32px.png'


export default function Resume({ frontEnds, backEnds }) {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Resume</p>
                </div>
                <div className="resume-link-container">
                <p className="download-resume">View my</p>
                <a href="https://docs.google.com/document/d/1pOtu-kCdBCwRdxCYgKFPLzDtrtCffk3tSg_zD46mR0U/edit?usp=sharing" target="_blank">
                            <img className="resume-icon" src={resumeIcon} alt="Resume Icon" />
                        </a>
                </div>                
                <div>
                    <p className="subtitle">Front-end Proficiencies</p>
                    <ul className="front-end-list">
                        {frontEnds.map((frontEnd) => (
                            <li className="front-end-item" key={frontEnd.id}>
                                {`${frontEnd.name}`}
                            </li>
                        ))}                        
                    </ul>
                </div>
                <div>
                    <p className="subtitle">Back-end Proficiencies</p>
                    <ul className="back-end-list">
                        {backEnds.map((backEnd) => (
                            <li className="back-end-item" key={backEnd.id}>
                                {`${backEnd.name}`}
                            </li>
                        ))}                        
                    </ul>
                </div>
            </div>
        </div>
        
    );
}


