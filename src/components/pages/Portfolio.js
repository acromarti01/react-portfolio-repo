import React from 'react';
import '../../styles/Portfolio.css';
import gitHubIcon from '../../assets/images/icons/github-mark-dark-32px.png'

export default function Portfolio() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Portfolio</p>
                </div>
                <div className="portfolio">
                    <div className="grid">
                        <div className="box box1">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://last-moment-savers.herokuapp.com">
                                        last moment savers
                                    </a>          
                                    <a href="https://github.com/avidrunner87/last-moment-savers.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box2">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://avidrunner87.github.io/small-talk">
                                        small talk
                                    </a>          
                                    <a href="https://github.com/avidrunner87/small-talk.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box3">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://drive.google.com/file/d/1sS0fzzeiJPgGbSPonGLsN4F_63C-2OGS/view">
                                        employee tracker
                                    </a>          
                                    <a href="https://github.com/acromarti01/employee-tracker-repo.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box4">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://drive.google.com/file/d/1DjjMiBH7ANFSefByHbgRr2QNnzFbA11A/view">
                                        team profile generator
                                    </a>          
                                    <a href="https://github.com/acromarti01/team-profile-generator.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box5">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://acromarti01.github.io/weather-dashboard-repo/">
                                        weather dashboard
                                    </a>          
                                    <a href="https://github.com/acromarti01/weather-dashboard-repo.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                        <div className="box box6">
                            <div className="img-description">
                                <div className="project-title-container">
                                    <a className="project-title" href="https://acromarti01.github.io/work-day-scheduler-repo/">
                                        work day scheduler
                                    </a>          
                                    <a href="https://github.com/acromarti01/work-day-scheduler-repo.git">
                                        <img src={gitHubIcon} alt="GitHub Icon" />
                                    </a>
                                </div>                                                               
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
}


