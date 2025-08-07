import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Target from './components/Target';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Guarantee from './components/Guarantee';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#ede6d1]">
      <Hero />
      <Problems />
      <Target />
      <Benefits />
      <Testimonials />
      <About />
      <Guarantee />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;