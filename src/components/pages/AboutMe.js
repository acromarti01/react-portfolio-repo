import React from 'react';
import '../../styles/AboutMe.css'


export default function AboutMe() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>about me</p>
                </div>
                <div className="image-container"></div>
                <div className="description-container">
                    <p className="bio">
                        I am a student at Rice University Coding Boot Camp currently living in Houston, Texas. I graduated from
                        Michigan
                        State University with a bachelor’s degree in computer science engineering. Some projects I have worked
                        on include
                        building a database and a gas mileage calculator for the Houston Health Department.
                    </p>
                    <p className="bio">
                        My fascination for computers
                        started around late middle school. Before I knew it, I would spend hours just surfing many websites
                        looking at their
                        creative styling and wondering how developers were able to create something so captivating. Some things
                        I like to do
                        in my free time is running, watching sports and anime, and playing video games.
                    </p>
                </div>
            </div>
        </div>
    );
}


