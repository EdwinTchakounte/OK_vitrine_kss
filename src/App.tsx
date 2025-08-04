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
import EducationResults from './components/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { ProgramDetailPage } from './components/programme_details';
import FormationPage from './components/Formation';

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/formation" element={<FormationPage />} />
            
            <Route path="/detail_programme/:title/:type" element={<ProgramDetailPage/>} /> 
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router></LanguageProvider>
  );
}

export default App;