import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Steps from './components/Steps';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Programs />
        <Steps />
        <Gallery />
        <Testimonials />
        <Partners />
        <FAQ />
        <Contact />
        <Footer />
  
      </div>
    </LanguageProvider>
  );
}

export default App;