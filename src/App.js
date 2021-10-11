import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/AboutMe';
import Contact from './pages/Contact';
import Nav from "./components/Nav";

// App is our top-level main component that references other components
function App() {
  return (
    <BrowserRouter>

      <Nav />
      <Routes>
        {/* Define routes to render different page components at different paths */}
        <Route path="/react-portfolio-repo" element={<Home />} />
        <Route path="/react-portfolio-repo/contact" element={<Contact />} />
        
      </Routes>


    </BrowserRouter>


  );
}

export default App;
