import React from 'react';
import '../../styles/AboutMe.css'
import professionalPic from '../../assets/images/professional-pic.jpg';


export default function AboutMe() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>about me</p>
                </div>
                <div className="image-container">
                    <img className="professional-pic" src={professionalPic} alt="my professional pic" />
                </div>
                <div className="description-container">
                    <p className="bio">
                        Software developer with a bachelor’s degree in computer science engineering from Michigan State University. 
                        Certificate in full stack web development from Rice University with proficiencies in front-end technologies 
                        including HTML, CSS, React, along with back-end technologies like MongoDB, Express and MySQL. 
                        Worked on a team of two to develop a MERN dashboard application that allowed users to interact 
                        with multiple apps at the same time.
                    </p>
                    <p className="bio">
                        My extensive experience in web technologies, including problem solving 
                        and project management, along with my thrill in taking on programming challenges 
                        through debugging and researching make me a strong member to any engineering team.  
                        My career goal is to become the project manager on large website projects, 
                        both the creation of the site and its maintenance.
                    </p>
                </div>
            </div>
        </div>
    );
}


