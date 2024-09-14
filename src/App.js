import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './App.css';
import Price from './components/price';
import Footer from './components/footer';
import Accordian from './components/accordian';
import LifeAtCrown from './components/lifeAtCrown';
import Amenties from './components/amenties';
import About from './components/about';
import Services from './components/services';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Navbar />
          <div className="">
            <Hero />
          </div>

          <main>
            <About />
            <Amenties />
            <Price />
            <LifeAtCrown />
            <Accordian />
            <Services />
          </main>
          <Footer />
        </div>

      )}
    </div>
  );
}

export default App;
