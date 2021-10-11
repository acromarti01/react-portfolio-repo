import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';


const Nav = () => {
  return (
    <header>
      <div className="inner-header">
        <div className="logo-container">
          <p className="myName">Anthony</p>
        </div>
        <div className="nav-container">
          <ul>
            <li><Link className="links" to="/react-portfolio-repo">
              <p>About Me</p>
            </Link>
            </li>
            <li><Link className="links" to="/react-portfolio-repo/contact">
              <p>Contact</p>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
