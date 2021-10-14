import React, { useState } from 'react';
import '../../styles/Footer.css';
import gitHubIcon from '../../assets/images/icons/github-mark-light-64px.png'
import linkedinIcon from '../../assets/images/icons/linkedin-light-64px.png';
import stackoverflowIcon from '../../assets/images/icons/stackoverflow-light-64px.png'


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="icon-container">
                <a href="https://github.com/acromarti01">
                    <img className="github-icon" src={gitHubIcon} alt="GitHub Icon" />
                </a>
            </div>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/anthony-c-07985b140">
                    <img className="linkedin-icon" src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </div>
            <div className="icon-container">
                <a href="https://stackoverflow.com/users/17146896/acromarti">
                    <img className="stackoverflow-icon" src={stackoverflowIcon} alt="Stackoverflow Icon" />
                </a>
            </div>            
        </div>
    );
}
