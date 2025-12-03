import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDrinks } from './components/SignatureDrinks';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Journal } from './components/Journal';
import { RegionProvider } from './context/RegionContext';

function App() {
  return (
    <RegionProvider>
      <div className="bg-cream-latte min-h-screen font-sans selection:bg-velvet-plum selection:text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <SignatureDrinks />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <Journal />
        <Newsletter />
        <Footer />
      </div>
    </RegionProvider>
  );
}

export default App;