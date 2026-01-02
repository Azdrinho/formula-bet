import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full bg-white selection:bg-brand-cyan selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Plans />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;