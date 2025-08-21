import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Steps from './components/Steps';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AcademicProgramsNavigator from './components/academic-programs-navigator';
import AcademicProgramsApp from './components/academic-programs-navigator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FormationPage from './components/Formation';
import EnseignantChine from './components/Enseignant_chine';
import CSC from './components/csc';
import ScrollToTop from './ScrollToTop';

function App() {
  

  return (
    <LanguageProvider>
    <Router>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<AcademicProgramsNavigator />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/formation" element={<FormationPage />} />

            <Route path="/enseignant_chine" element={<EnseignantChine/>} />
            <Route path="/CSC" element={<CSC/>} />

            
            
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router></LanguageProvider>
  );
}

export default App;