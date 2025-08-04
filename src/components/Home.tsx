import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Steps from './Steps';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Partners from './Partners';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import AcademicProgramsNavigator from './academic-programs-navigator';
import AcademicProgramsApp from './academic-programs-navigator';
import EducationResults from './Result';
import StatCard from './StatCard';
import FormationPage from './Formation';

const Home: React.FC = () => {



   return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <AcademicProgramsApp />
        <Steps />
        {/* <Gallery /> */}
        <Testimonials />
         <StatCard/>
        {/* <EducationResults /> */}
        <Partners />
        <FAQ />
        <Contact />
         <FormationPage/>
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default Home;