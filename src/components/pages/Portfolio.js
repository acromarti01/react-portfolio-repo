import React from 'react';
import '../../styles/Portfolio.css';

export default function Portfolio() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="title-container">
                    <p>Portfolio</p>
                </div>
                <div className="por-container">
                    <div className="grid-container">
                        <div class="item item a1 wrap">
                            <div className="img-description">
                                <a className="project-links" href="https://last-moment-savers.herokuapp.com">The link</a>
                            </div>
                            
                        </div>
                        <div className="item item a2 wrap"></div>
                        <div className="item item a3 wrap"></div>
                        <div className="item item a4 wrap"></div>
                        <div className="item item a5 wrap"></div>
                        <div className="item item a6 wrap"></div>
                    </div>
                </div>
            </div>           
        </div>
    );
}


