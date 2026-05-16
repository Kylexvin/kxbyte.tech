// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Process from './components/Process';
import CTA from './components/CTA';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';

import './styles/index.css';

// Component to handle hash navigation
function HashHandler() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HashHandler />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Projects />
              <Process />
              <CTA />
            </>
          } />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/service/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;