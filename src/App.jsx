import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GotoTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <GoToTop 
  threshold={400}
  position="bottom-6 right-6"
  buttonColor="bg-accent hover:bg-secondary"
  size="p-3 md:p-5"
  iconSize="h-6 w-6 md:h-8 md:w-8"
  showTooltip={true}
/>
    </div>
  );
}

export default App;