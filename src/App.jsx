import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Contact /> */}
            </>
             } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </main>
    </Router>
    
  );
};

export default App;
