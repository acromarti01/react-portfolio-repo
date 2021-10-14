import React from 'react';
import '../../styles/Resume.css'
import resumeIcon from '../../assets/images/icons/resume-light-32px.png'


export default function Resume() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Resume</p>
                </div>
                <div className="resume-link-container">
                <p className="download-resume">View my</p>
                <a href="https://docs.google.com/document/d/1TLqti3-iu9jxoKOcekPNUaVEM1h5wyra/edit?usp=sharing&ouid=106100799987657497926&rtpof=true&sd=true" target="_blank">
                            <img className="resume-icon" src={resumeIcon} alt="Resume Icon" />
                        </a>
                </div>
                
                <div>
                    <p className="subtitle">Front-end Proficiencies</p>
                    <ul className="front-end-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <p className="subtitle">Back-end Proficiencies</p>
                    <ul className="back-end-list">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}


