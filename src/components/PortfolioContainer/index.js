import React, { useState } from 'react';
import Nav from '../Nav';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <AboutMe />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />      
      {renderPage()}
    </div>
  );
}
