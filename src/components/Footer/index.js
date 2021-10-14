import React, { useState } from 'react';
import '../../styles/Footer.css';
import linkedinPic from '../../assets/images/linkedin1.png';


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="anthony-c-07985b140" data-version="v1">
                <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/anthony-c-07985b140?trk=profile-badge">
                    <img className="linkedin-pic" src={linkedinPic} alt="linkedin icon" />
                </a>
            </div>
        </div>
    );
}
