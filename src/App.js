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
import RequestForm from './components/requestForm';
import ModalRequestForm from './components/modalRequestform';

function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal]=useState(true)

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
        <>
          {
            !showModal?(
              <div className="App">
                <Header />
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
          ):(
              <>
                <div className="App" style={{overflowY:"hidden"}}>
                  <Header />
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

                <div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-10'></div>

                <div className='fixed inset-0 flex items-center justify-center z-20'>
                  <ModalRequestForm closeModal={() => setShowModal(false)} />
                </div>
              </>
          )
          }
        </>

      )}
    </div>
  );
}

export default App;
