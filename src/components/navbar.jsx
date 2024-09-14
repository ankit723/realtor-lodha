import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [loading, setLoading] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const headerHeight = document.querySelector('.header').offsetHeight;
        if (window.scrollY > headerHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <ul className="nav-list">
      <li className="nav-item"><a className='current' href="#">About</a></li>
      <li className="nav-item"><a href="#">Location</a></li>
      <li className="nav-item"><a href="#">Plans</a></li>
      <li className="nav-item"><a href="#">Price</a></li>
      <li className="nav-item"><a href="#">Amenities</a></li>
      <li className="nav-item"><a href="#">Gallery</a></li>
    </ul>
    {isScrolled && <button className="contact-us-btn">Contact Us</button>}
  </nav>
  )
}

export default Navbar