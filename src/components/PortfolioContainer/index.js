import React, { useState } from 'react';
import Nav from '../Nav';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from '../Footer';
import frontEnds from '../../utils/frontEndProficiencies';
import backEnds from '../../utils/backEndProficiencies';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume frontEnds={frontEnds} backEnds={backEnds} />;
    }
    return <AboutMe />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />      
      {renderPage()}
      <Footer />
    </div>
  );
}
