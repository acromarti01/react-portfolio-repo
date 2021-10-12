import React from 'react';
import '../../styles/Nav.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="inner-header">
        <div className="logo-container">
          <p className="myName">Anthony</p>
        </div>
        <div className="nav-container">
          <ul>
            <li className="links">
              <a
                href="#about"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="links">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="links">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );

}

























// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../styles/Nav.css';


// const Nav = () => {
//   return (
//     <header>
//       <div className="inner-header">
//         <div className="logo-container">
//           <p className="myName">Anthony</p>
//         </div>
//         <div className="nav-container">
//           <ul>
//             <li><Link className="links" to="/react-portfolio-repo">
//               <p>About Me</p>
//             </Link>
//             </li>
//             <li><Link className="links" to="/react-portfolio-repo/contact">
//               <p>Contact</p>
//             </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Nav;
